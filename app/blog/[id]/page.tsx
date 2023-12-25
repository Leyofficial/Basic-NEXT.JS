import {getAllPosts, getPostById} from "@/services/posts/getPosts";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";


type IProps = {
    params : {
        id : string
    }
}

export async function generateStaticParams(){
    const posts : any[] = await getAllPosts();

    return posts.map((post) => ({
        slug : post.id.toString()
    }))
}

async function getBlogItem (id : string) {
    return  await getPostById(id);
}


export default async function BlogItem({params : { id } } : IProps){
    const data  = await getBlogItem(id)

     async function deletePost() {
        'use server'
        await fetch(`http://localhost:3001/posts/${id}` , {
            method : 'DELETE',
            headers : {
                "Content-Type" : "application/json"
            },
        })
        revalidatePath('/blog');
        redirect('/blog')
    }

    return (
        <>
        <h1>{data?.title}</h1>
            <p>{data?.body}</p>
            <form action={deletePost}>
                <input type="submit" value={'delete post'}/>

            </form>
        </>
    )
 }