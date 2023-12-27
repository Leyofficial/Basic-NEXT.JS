import {getPostById} from "@/services/posts/getPosts";
import {revalidatePath} from "next/cache";


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
      async function handlerDeletePost() {
        'use server'
          await fetch(`http://localhost:3001/posts/${id}` , {
              method : 'DELETE',
              headers : {
                  "Content-Type" : "application/json"
              },
              next : {
                  revalidate : 10
              }
          })
          revalidatePath('/blog');
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