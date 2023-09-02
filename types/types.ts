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
  