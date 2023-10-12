import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';

export interface DBTeamPokemon {
    variety: number;
    pokemon_url: string;
    pokemon_name: string;
}

export interface DBTeam {
    pokemon: DBTeamPokemon[];
    name: string;
    description: string
}

type DBTeamArray = DBTeam[];

function useTeamsByUser(user_id?: string) {
  const supabase = useSupabaseClient();  
  const [teams, setTeams] = useState<DBTeam[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const { data, error } = await supabase
          .from('teams')
          .select(`pokemon, name, description`)
          .eq('user_id', user_id);

        if (error) {
          setError(error.message);
        } else {
        // Map the data to convert it to the desired structure (DBTeam)
          setTeams(data as unknown as DBTeamArray);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if(user_id) {
      fetchTeams();
    }
  }, [user_id, supabase]);

  return { teams, loading, error };
}

export default useTeamsByUser;