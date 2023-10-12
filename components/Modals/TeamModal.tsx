"use client"
import Button from "@/components/Button";
import Modal from "@/components/Modals/Modal";
import { usePokedex } from "@/context/usePokedex";
import { TeamPokemon, useTeam } from "@/context/useTeam";
import useTeamModal from "@/hooks/useTeamModal";
import { DBTeam } from "@/hooks/useTeamsByUser";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";


const TeamModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const P = usePokedex();
    const {onClose, isOpen, selectedTeam} = useTeamModal();
    const router = useRouter();
    const { setSelectedTeam } = useTeam();
    
    const fromDBTeamToTeambuilder = useCallback(() => {
        const fetchTeamData = async () => {
            setIsLoading(true);

            const promises = selectedTeam!.pokemon.map((pokemon) => {
                return fetchPokemonData(pokemon.pokemon_name, pokemon.variety);
            });
        
            const convertedTeam = await Promise.all(promises);

            setSelectedTeam(convertedTeam);
        }

        const fetchPokemonData = async (species_name: string, variety: number) => {
            const species = await P.getPokemonSpeciesByName(species_name);
            const pokemon = await P.getPokemonByName(species.varieties[variety].pokemon.name);
            return {pokemon, variety} as TeamPokemon;
        };
        
        if(selectedTeam!){
            fetchTeamData();
        }
    
      }, [P, setSelectedTeam, selectedTeam]);

    const onLoad = () => {
        try{
            setIsLoading(true);

            fromDBTeamToTeambuilder();

            router.push("/teams/teambuilder");
            setIsLoading(false);
            toast.success('Team loaded!');
            onClose();

        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);    
        }
    }

    return (
        <Modal
            title={selectedTeam ? selectedTeam.name : "Default"}
            description={selectedTeam? selectedTeam.description : "Default description"}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex justify-center items-center w-70% h-24 shrink-0">
                <div className="flex flex-col gap-4">
                    <Button disabled={isLoading} confirm big onClick={onLoad}>
                        Load team
                    </Button>
                    <Button disabled={isLoading} danger>
                        Delete team
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
 
export default TeamModal;