
import axios from "axios";
import {ILink} from "@/app/types/types";

export async function getAllPosts() {
   const res = await fetch('/api/posts');
   return res.json()
}

export async function getPostByQuery(search: string) {
   return axios.get<ILink[]>(`/api/posts?q=${search}`)
}

export async function getPostById(id: string) {
      const res = await fetch(`http://localhost:3000/api/posts/${id}`);

      if (!res.ok) {
         throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      return res.json();
}
