
import axios from "axios";
import {ILink} from "@/types/types";
import {revalidatePath} from "next/cache";

export async function getAllPosts() {
    const res = await fetch('http://localhost:3001/posts' , )
   return res.json()
}

export async function getPostByQuery(search: string) {
   return axios.get<ILink[]>(`http://localhost:3001/posts?q=${search}`)
}

export  async function deletePost(id : string) {
    if (!id) return
    await fetch(`http://localhost:3001/posts/${id}` , {
        method : 'DELETE',
        headers : {
            "Content-Type" : "application/json"
        },
    })
    revalidatePath('/blog');
}

export async function getPostById(id: string) {
      const res = await fetch(`http://localhost:3001/posts/${id}`);

      if (!res.ok) {
         throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      return res.json();
}
