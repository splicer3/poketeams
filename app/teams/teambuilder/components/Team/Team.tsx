"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { TbPokeballOff } from "react-icons/tb";
import clsx from "clsx";
import { Pokemon } from "pokedex-promise-v2";

import { useTeam } from "@/context/useTeam";
import { usePokemon } from "@/context/usePokemon";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import TeamAnalyzer from "./TeamAnalyzer";
import PokemonSprite from "../PokemonInfo/PokemonSprite";
import { formatTeamNames, processName, typeColors } from "@/lib/utils";
import Button from "@/components/Button";
import NewTeamModal from "../../../../../components/Modals/NewTeamModal";
import useNewTeamModal from "@/hooks/useNewTeamModal";
import toast from "react-hot-toast";

const PokemonTeamBuilder = () => {
  const {
    selectedPokemon,
    setSelectedPokemon,
    pokemonData,
    variety,
    setVariety,
  } = usePokemon();
  const { selectedTeam, setSelectedTeam, id } = useTeam();
  const authModal = useAuthModal();
  const newTeamModal = useNewTeamModal();
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();

  const [teamToAnalyze, setTeamToAnalyze] = useState<Pokemon[]>([]);

  const handleAddToTeam = () => {
    if (
      selectedTeam.length < 6 &&
      selectedPokemon &&
      !selectedTeam.some((item) => item.pokemon === pokemonData!)
    ) {
      setSelectedTeam((prevTeam) => [
        ...prevTeam,
        { pokemon: pokemonData!, variety },
      ]);
    }
  };

  const handleRemoveFromTeam = (pokemon: Pokemon) => {
    setSelectedTeam((prevTeam) =>
      prevTeam.filter((item) => item.pokemon !== pokemon),
    );
  };

  const handleSubmitTeam = () => {
    // Here you can implement the logic to store the selected team in a database or any other desired action
    if (!user) {
      return authModal.onOpen();
    } else {
      return newTeamModal.onOpen();
    }
  };

  const updateTeam = useCallback(async () => {
    const teamDB = selectedTeam.map((teamPokemon) => {
      return {
        pokemon_name: teamPokemon.pokemon.species.name,
        pokemon_url: teamPokemon.pokemon.species.url, // Replace Pokemon object with species value
        variety: teamPokemon.variety,
      };
    });

    if (!user) {
      toast.error("Not logged in");
      return;
    }

    // Upload team

    const supabasePromise = await supabaseClient
      .from("teams")
      .update([
        {
          pokemon: teamDB,
        },
      ])
      .eq("id", id)
      .eq("user_id", user.id);
  }, [id, selectedTeam, supabaseClient, user]);

  const handleUpdateTeam = () => {
    toast.promise(updateTeam(), {
      loading: "Updating...",
      success: "Updated!",
      error: (err) => `Error: ${err.toString()}`,
    });
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(formatTeamNames(selectedTeam));
  };

  const handleShowdownCopy = () => {
    toast
      .promise(copyToClipboard(), {
        loading: "Copying to clipboard...",
        success: "Copied to cliboard!",
        error: "Could not copy to clipboard",
      })
      .then(() => {
        setTimeout(
          () => window.open("https://play.pokemonshowdown.com/teambuilder"),
          1500,
        );
      })
      .catch((error) => {});
  };

  useEffect(() => {
    setTeamToAnalyze(selectedTeam.map((pokemon) => pokemon.pokemon));
  }, [selectedTeam]);

  return (
    <>
      <NewTeamModal />
      <div className="flex flex-col 2xl:flex-row justify-center gap-10 2xl:gap-20 dark:text-white p-6 rounded-xl cool-box">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center">
            <h2 className="font-medium">Current Team</h2>
            <Button
              onClick={handleAddToTeam}
              disabled={
                !selectedPokemon ||
                selectedTeam.length >= 6 ||
                selectedTeam.some((item) => item.pokemon === pokemonData!)
              }
              secondary
            >
              Add current Pokémon
            </Button>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 mt-4">
              {selectedTeam.map((pokemon) => (
                <div
                  key={pokemon.pokemon.id}
                  className={clsx(
                    `flex flex-col gap-1 justify-center items-center
                  bg-gray-200 dark:bg-gray-600
                  hover:bg-gradient-to-b from-[${
                    typeColors[pokemon.pokemon.types[0].type.name] + "80"
                  }]
                  px-4 py-2 rounded-xl cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition`,
                    pokemon.pokemon.types[1]
                      ? `to-[${
                          typeColors[pokemon.pokemon.types[1].type.name] + "80"
                        }]`
                      : "to-gray-200 dark:to-gray-600",
                  )}
                  onClick={() => {
                    setSelectedPokemon(pokemon.pokemon.species.name);
                    setVariety(pokemon.variety);
                  }}
                >
                  <PokemonSprite
                    width={40}
                    height={40}
                    pokemon={pokemon.pokemon}
                  />
                  <span className="capitalize px-8">
                    {processName(pokemon.pokemon.name)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromTeam(pokemon.pokemon);
                    }}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <TbPokeballOff />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-around gap-4">
            <Button
              onClick={handleSubmitTeam}
              disabled={selectedTeam.length < 1}
              confirm
            >
              Submit as new Team
            </Button>
            {id && (
              <Button
                onClick={handleUpdateTeam}
                disabled={selectedTeam.length < 1}
              >
                Update Team
              </Button>
            )}
            <Button
              onClick={handleShowdownCopy}
              disabled={selectedTeam.length < 1}
            >
              Copy in Showdown format
            </Button>
          </div>
        </div>
        {selectedTeam.length != 0 && <TeamAnalyzer team={teamToAnalyze} />}
      </div>
    </>
  );
};

export default PokemonTeamBuilder;
