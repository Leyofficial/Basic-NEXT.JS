import {deletePost, getAllPosts, getPostById} from "@/services/posts/getPosts";
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
      async function handlerDeletePost() {
        'use server'
          await deletePost(id)
          redirect('/blog')
    }
    return (
        <>
        <h1>{data?.title}</h1>
            <p>{data?.body}</p>
            <form action={handlerDeletePost}>
                <input type="submit" value={'delete post'}/>
            </form>
        </>
    )
 }