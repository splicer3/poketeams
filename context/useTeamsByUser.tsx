import { User, useSupabaseClient } from "@supabase/auth-helpers-react";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface DBTeamPokemon {
  variety: number;
  pokemon_url: string;
  pokemon_name: string;
}

export interface DBTeam {
  id: number;
  pokemon: DBTeamPokemon[];
  name: string;
  description: string;
}

type DBTeamArray = DBTeam[];

type TeamsByUserProps = {
  teams: DBTeam[] | undefined;
  setTeams: (teams: DBTeam[]) => void;
  loading: boolean;
  error: string | null;
};

const TeamsByUserContext = createContext<TeamsByUserProps | undefined>(
  undefined,
);

export function useTeamsByUser(): TeamsByUserProps {
  const context = useContext(TeamsByUserContext);
  if (!context) {
    throw new Error("useTeamsByUser must be used within a TeamsByUserProvider");
  }
  return context;
}

interface TeamsByUserProviderProps {
  children: ReactNode;
  user: User;
}

export function TeamsByUserProvider({
  children,
  user,
}: TeamsByUserProviderProps) {
  const supabase = useSupabaseClient();
  const [teams, setTeams] = useState<DBTeam[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async (user_id: string | undefined) => {
      try {
        const { data, error } = await supabase
          .from("teams")
          .select(`id, pokemon, name, description`)
          .eq("user_id", user_id);

        if (error) {
          setError(error.message);
        } else {
          setTeams(data as unknown as DBTeamArray);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch teams when user_id changes
    fetchTeams(user.id);
  }, [user, supabase]);

  return (
    <TeamsByUserContext.Provider value={{ teams, setTeams, loading, error }}>
      {children}
    </TeamsByUserContext.Provider>
  );
}
