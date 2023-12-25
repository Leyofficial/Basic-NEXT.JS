
import axios from "axios";
import {ILink} from "@/types/types";

export async function getAllPosts() {
    const res = await fetch('http://localhost:3001/posts' , )
   return res.json()
}

export async function getPostByQuery(search: string) {
   return axios.get<ILink[]>(`http://localhost:3001/posts?q=${search}`)
}

export async function getPostById(id: string) {
      const res = await fetch(`http://localhost:3001/posts/${id}`);

      if (!res.ok) {
         throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      return res.json();
}
