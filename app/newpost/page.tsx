import {revalidatePath} from "next/cache";
import {NewPostForm} from "@/components/NewPostForm/NewPostForm";

export default function NewPostPage() {
    return (
        <>
        <NewPostForm onSuccess={ async () => {
            "use server"
            revalidatePath('/blog')
        }}/>
        </>
    )
}