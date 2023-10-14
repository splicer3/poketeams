"use client"
import Button from "@/components/Button";
import Modal from "@/components/Modals/Modal";
import { usePokedex } from "@/context/usePokedex";
import { TeamPokemon, useTeam } from "@/context/useTeam";
import { useTeamsByUser } from "@/context/useTeamsByUser";
import useTeamModal from "@/hooks/useTeamModal";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";


const TeamModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const P = usePokedex();
    const {onClose, isOpen, selectedTeam: selectedDBTeam} = useTeamModal();
    const router = useRouter();
    const { setSelectedTeam, setId } = useTeam();
    const supabaseClient = useSupabaseClient();
    const { user } = useUser();
    const { teams, setTeams } = useTeamsByUser();
    
    const fromDBTeamToTeambuilder = useCallback(() => {
        const fetchTeamData = async () => {
            setIsLoading(true);

            const promises = selectedDBTeam!.pokemon.map((pokemon) => {
                return fetchPokemonData(pokemon.pokemon_name, pokemon.variety);
            });
        
            const convertedTeam = await Promise.all(promises);

            setSelectedTeam(convertedTeam);
            setId(selectedDBTeam!.id);
        }

        const fetchPokemonData = async (species_name: string, variety: number) => {
            const species = await P.getPokemonSpeciesByName(species_name);
            const pokemon = await P.getPokemonByName(species.varieties[variety].pokemon.name);
            return {pokemon, variety} as TeamPokemon;
        };
        
        if(selectedDBTeam!){
            fetchTeamData();
        }
    
      }, [P, setSelectedTeam, selectedDBTeam, setId]);

    const onLoad = () => {
        try{
            setIsLoading(true);

            fromDBTeamToTeambuilder();

            router.push("/teams/teambuilder");
            setIsLoading(false);
            toast.success('Team loaded!');
            onClose();

        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);    
        }
    }

    const onDelete = async () => {
        setIsLoading(true);
        const supabasePromise = await supabaseClient
                    .from('teams')
                    .delete()
                    .eq('user_id', user!.id)
                    .eq('id', selectedDBTeam!.id);
        setIsLoading(false);
        const newTeams = teams?.filter(team => team.id != selectedDBTeam?.id)
        setTeams(newTeams!);
        onClose();
    }

    const handleOnDelete = () => {
        toast.promise(onDelete(), {
            loading: 'Deleting...',
            success: 'Successfully deleted!',
            error: (err) => `Error: ${err.toString()}`
        })
    }

    return (
        <Modal
            title={selectedDBTeam ? selectedDBTeam.name : "Default"}
            description={selectedDBTeam? selectedDBTeam.description : "Default description"}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex justify-center items-center w-70% h-24 shrink-0">
                <div className="flex flex-col gap-4">
                    <Button disabled={isLoading} confirm big onClick={onLoad}>
                        Load team
                    </Button>
                    <Button onClick={handleOnDelete} disabled={isLoading} danger>
                        Delete team
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
 
export default TeamModal;