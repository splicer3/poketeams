"use client"
import { PokemonProvider } from "@/context/PokemonContext";
import PokemonAbilities from "./components/PokemonInfo/PokemonAbilities";
import PokemonCombo from "./components/PokemonInfo/PokemonCombo";
import PokemonSprite from "./components/PokemonInfo/PokemonSprite";
import PokemonStats from "./components/PokemonInfo/PokemonStats";
import PokemonType from "./components/PokemonInfo/PokemonType";
import Team from "./components/Team/Team";
import { usePokedex } from "@/context/PokedexContext";

export default function Home() {

  const P = usePokedex();

  return (
    <PokemonProvider P={P}>
    <main className="flex flex-col sm:flex-row justify-evenly gap-10 sm:gap-0 w-full">
      <div className="flex flex-col gap-20">
        <h1 className="capitalize font-bold text-3xl text-start pl-6">
          Team builder
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <PokemonSprite />
          <PokemonCombo />
          <PokemonType />
          <PokemonStats />
        </div>
      </div>
      <div className="flex flex-col items-center px-1 gap-10">
      <PokemonAbilities />
      <Team />
      </div>
    </main>
    </PokemonProvider>
  )};
