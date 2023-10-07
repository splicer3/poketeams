import Button from "@/components/Button";
import Modal from "@/components/Modals/Modal";
import { usePokemon } from "@/context/usePokemon";
import { useTeam } from "@/context/useTeam";
import useNewTeamModal from "@/hooks/useNewTeamModal";
import { useUser } from "@/hooks/useUser";
import { typeColors } from "@/lib/utils";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const NewTeamModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useUser();
    const { pokemonData } = usePokemon();
    const { selectedTeam } = useTeam();
    const newTeamModal = useNewTeamModal();
    const supabaseClient = useSupabaseClient();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            desc: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        try {
            setIsLoading(true);

            const name = values.name;
            const desc = values.desc;
            /*
            const teamDB = selectedTeam.map((teamPokemon) => {
                return {
                  pokemon_name: teamPokemon.pokemon.species.name,
                  pokemon_url: teamPokemon.pokemon.species.url, // Replace Pokemon object with species value
                  variety: teamPokemon.variety,
                };
              });
            const team = JSON.stringify(teamDB);
            console.log(team)*/

            if (!name || !desc || !user) {
                toast.error('Missing fields');
                return;
            }

            // Upload team

            const {
                error: supabaseError
            } = await supabaseClient
                        .from('teams')
                        .insert([{
                            user_id: user.id,
                            name: values.name,
                            description: values.desc,
                            pokemon: selectedTeam,
                        }])

            if (supabaseError) {
                setIsLoading(false);
                return toast.error(supabaseError.message);
            }

            router.refresh();
            setIsLoading(false);
            toast.success('Team saved!');
            reset();
            newTeamModal.onClose();

        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);    
        }
    }

    return (
        <Modal
            title="Save your team"
            description="Provide name and description"
            isOpen={newTeamModal.isOpen}
            onClose={newTeamModal.onClose}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-4"
            >
                <input
                    id="name"
                    disabled={isLoading}
                    {...register('name', { required: true })}
                    className={clsx(`w-full p-2 pl-4 pr-10 capitalize rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:border-transparent focus:shadow-lg`,
                  pokemonData?.types[0].type ? `focus:ring-[${typeColors[pokemonData.types[0].type.name]}]` : "focus:ring-teal-500"
                )}
                    placeholder = "Team name"
                />
                <input
                    id="desc"
                    disabled={isLoading}
                    {...register('desc', { required: true })}
                    className={clsx(`w-full p-2 pl-4 pr-10 capitalize rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:border-transparent focus:shadow-lg`,
                    pokemonData?.types[0].type ? `focus:ring-[${typeColors[pokemonData.types[0].type.name]}]` : "focus:ring-teal-500"
                )}
                    placeholder = "Team description"
                />
                <Button disabled={isLoading} type="submit" confirm big>
                    Save
                </Button>
            </form>
        </Modal>
    );
}
 
export default NewTeamModal;