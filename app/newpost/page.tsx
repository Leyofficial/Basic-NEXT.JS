import {revalidatePath} from "next/cache";
import {NewPostForm} from "@/components/NewPostForm/NewPostForm";
import {redirect} from "next/navigation";


async function createPost(data : FormData) {
    "use server"
    const {title , body} = Object.fromEntries(data);

    const response = await fetch('http://localhost:3001/posts' , {
        method : 'POST' ,
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({title , body , id : String(Date.now())})
    })
     await response.json();
    revalidatePath('/blog')
    redirect('/blog')
}


export default function NewPostPage() {
    return (
        <>
        <NewPostForm onSuccess={createPost}/>
        </>
    )
}