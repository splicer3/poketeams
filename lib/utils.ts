import { TeamPokemon } from "@/context/useTeam";
import PokeAPI from "pokedex-promise-v2";

export const typeColors: { [key: string]: string } = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

export const Statistics = [
  "HP",
  "Attack",
  "Defense",
  "Sp. Atk",
  "Sp. Def",
  "Speed",
];

export const pokemonTypes = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

export const fetchAbilityDescription = async (
  abilityName: string,
  P: PokeAPI,
) => {
  try {
    const ability = await P.getAbilityByName(abilityName);
    if (ability.name === "overgrow" || ability.name === "frisk") {
      return ability.effect_entries[0].short_effect;
    }
    return ability.effect_entries[1].short_effect;
  } catch (error) {
    console.error(
      `Error fetching ability description for ${abilityName}:`,
      error,
    );
    return "";
  }
};

export function processName(str: string): string {
  if (str.length <= 12) {
    return str.replace("-", " ");
  } else {
    const hyphenIndex = str.indexOf("-");
    if (hyphenIndex !== -1) {
      return str.substring(0, hyphenIndex);
    } else {
      return str;
    }
  }
}

export function formatTeamNames(team: TeamPokemon[]): string {
  const formattedNames = team
    .map((pokemon) => pokemon.pokemon.name)
    .join("\n\n");
  return formattedNames;
}

const generationRanges = [
  { gen: 1, maxId: 151 },
  { gen: 2, maxId: 251 },
  { gen: 3, maxId: 386 },
  { gen: 4, maxId: 493 },
  { gen: 5, maxId: 649 },
  { gen: 6, maxId: 721 },
  { gen: 7, maxId: 809 },
  { gen: 8, maxId: 905 },
  { gen: 9, maxId: 1017 },
];

export const getGeneration = (id: number) => {
  for (let i = 0; i < generationRanges.length; i++) {
    if (id <= generationRanges[i].maxId) {
      return generationRanges[i].gen;
    }
  }
};
