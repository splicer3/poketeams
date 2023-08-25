import PokemonCombo from "@/components/PokemonCombo";
import PokemonType from "@/components/PokemonType";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center">
      <PokemonCombo/>
      <PokemonType/>
    </main>
  )
}
