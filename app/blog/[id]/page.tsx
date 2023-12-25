import {getAllPosts, getPostById} from "@/services/posts/getPosts";


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
    return (
        <>
        <h1>{data?.title}</h1>
            <p>{data?.body}</p>
        </>
    )
 }