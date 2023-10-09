import PokeAPI from "pokedex-promise-v2";
import { useEffect, useState } from "react";

function useTeamPokemonPreview(P:PokeAPI, species_name: string, variety: number) {
    const [isLoading, setIsLoading] = useState(true);
    const [sprite, setSprite] = useState("");
    const [name, setName] = useState("");
    useEffect(() => {
        const fetchPokemonData = async () => {
          setIsLoading(true);
            const species = await P.getPokemonSpeciesByName(species_name);
            const pokemon = await P.getPokemonByName(species.varieties[variety].pokemon.name);
            setSprite(pokemon.sprites.front_default!);
            setName(pokemon.name);

          setIsLoading(false);
        };
    
          fetchPokemonData();
    
      }, [species_name, P, variety]);

    return { sprite, name, isLoading };
}

export default useTeamPokemonPreview;