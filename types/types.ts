export type Ability = {
    ability: string;
    abilityDescription: string;
    isHidden: boolean;
  };

export interface UserDetails {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
};

export type Pokemon = {
  name: string;
  type1: string;
  type2: string | undefined;
}