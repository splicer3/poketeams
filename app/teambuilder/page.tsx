"use client"
import { PokemonProvider } from "@/context/PokemonContext";
import PokemonAbilities from "./components/PokemonInfo/PokemonAbilities";
import PokemonCombo from "./components/PokemonInfo/PokemonCombo";
import PokemonStats from "./components/PokemonInfo/PokemonStats";
import PokemonType from "./components/PokemonInfo/PokemonType";
import Team from "./components/Team/Team";
import { usePokedex } from "@/context/PokedexContext";
import TypeColor from "./components/TypeColor";
import { TeamProvider } from "@/context/TeamContext";
import useViewport from "@/hooks/useViewPort";
import useViewportStore from "@/hooks/useViewPortStore";
import Button from "@/components/Button";
import PokemonImage from "./components/PokemonInfo/PokemonImage";

export default function Home() {
  const P = usePokedex();
  const isMobile = useViewport();
  const [showTeam, setShowTeam] = useViewportStore(state => [state.showTeam, state.setShowTeam]);

  return (
    <PokemonProvider P={P}>
      <TeamProvider>
        <TypeColor>
        {isMobile && 
        <div className="flex flex-col">
              <Button
                onClick={() => setShowTeam(!showTeam)}
              >
                {showTeam ? 'Pokemon View' : 'Team View'}
              </Button>
        </div>
            }
          <div className="flex flex-col sm:flex-row gap-16 items-center justify-center">
            <div className="flex flex-col items-center gap-4 py-6 cool-box">
              <PokemonImage/>
              <PokemonCombo />
              <PokemonType />
            </div>
            {(!isMobile || !showTeam) && 
              <div className="flex flex-col gap-10">
                <PokemonAbilities />
                <PokemonStats />
              </div>
            }
          </div>
          <div className="flex flex-col items-center gap-8 py-6">
          {(!isMobile || showTeam) && <Team />}
          </div>
        </TypeColor>
      </TeamProvider>
    </PokemonProvider>
  );
};
