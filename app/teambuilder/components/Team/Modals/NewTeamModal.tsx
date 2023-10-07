import useNewTeamModal from "@/hooks/useNewTeamModal";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const NewTeamModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useUser();
    const newTeamModal = useNewTeamModal();
    const supabaseClient = useSupabaseClient();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            title: '',
            desc: '',
            song: null,
            image: null,
        }
    })

    const onChange = (open: boolean) => {
        if (!open) {
            reset();
            newTeamModal.onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    }
// WIP
}
 
export default NewTeamModal;