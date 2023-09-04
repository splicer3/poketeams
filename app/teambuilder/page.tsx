"use client"
import { PokemonProvider } from "@/context/PokemonContext";
import PokemonAbilities from "./components/PokemonInfo/PokemonAbilities";
import PokemonCombo from "./components/PokemonInfo/PokemonCombo";
import PokemonSprite from "./components/PokemonInfo/PokemonSprite";
import PokemonStats from "./components/PokemonInfo/PokemonStats";
import PokemonType from "./components/PokemonInfo/PokemonType";
import Team from "./components/Team/Team";
import { usePokedex } from "@/context/PokedexContext";
import TypeColor from "./components/TypeColor";

export default function Home() {
  const P = usePokedex();

  return (
    <PokemonProvider P={P}>
      <TypeColor>
        <div className="flex flex-col gap-16 items-center py-6">
          <div className="flex flex-col items-center gap-4 bg-white bg-opacity-30 dark:bg-gray-800 py-6 rounded-xl">
            <PokemonSprite />
            <PokemonCombo />
            <PokemonType />
          </div>
          <PokemonStats />
        </div>
      <div className="flex flex-col items-center gap-10 py-6">
      <PokemonAbilities />
      <Team />
      </div>
      </TypeColor>
    </PokemonProvider>
  )};
