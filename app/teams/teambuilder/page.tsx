"use client";
import { PokemonProvider } from "@/context/usePokemon";
import PokemonAbilities from "./components/PokemonInfo/PokemonAbilities";
import PokemonCombo from "./components/PokemonInfo/PokemonCombo";
import PokemonStats from "./components/PokemonInfo/PokemonStats";
import PokemonType from "./components/PokemonInfo/PokemonType";
import Team from "./components/Team/Team";
import { usePokedex } from "@/context/usePokedex";
import TypeColor from "./components/TypeColor";
import { TeamProvider } from "@/context/useTeam";
import useViewport from "@/hooks/useViewPort";
import useViewportStore from "@/hooks/useViewPortStore";
import Button from "@/components/Button";
import PokemonImage from "./components/PokemonInfo/PokemonImage";

export default function Home() {
  const P = usePokedex();
  const isMobile = useViewport();
  const [showTeam, setShowTeam] = useViewportStore((state) => [
    state.showTeam,
    state.setShowTeam,
  ]);

  return (
    <PokemonProvider P={P}>
      <TypeColor>
        {isMobile && (
          <div className="flex flex-col pt-24">
            <Button onClick={() => setShowTeam(!showTeam)}>
              {showTeam ? "Pokemon View" : "Team View"}
            </Button>
          </div>
        )}
        <div className="flex flex-col pt-0 sm:pt-20 sm:flex-row gap-16 items-center justify-center">
          <div className="flex flex-col items-center gap-4 px-6 py-10 cool-box w-[90%] sm:w-auto">
            <PokemonImage />
            <PokemonCombo />
            <PokemonType />
          </div>
          {(!isMobile || !showTeam) && (
            <div className="flex flex-col gap-10 w-[90%] sm:w-auto">
              <PokemonAbilities />
              <PokemonStats />
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-8 py-6">
          {(!isMobile || showTeam) && <Team />}
        </div>
      </TypeColor>
    </PokemonProvider>
  );
}
