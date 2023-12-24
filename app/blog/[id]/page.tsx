import {getPostById} from "@/services/posts/getPosts";


type IProps = {
    params : {
        id : string
    }
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