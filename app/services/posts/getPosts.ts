import axios from "axios";
import {ILink} from "@/components/Header/HeaderNavigation/HeaderNavigation";

export async function getAllPosts() {
   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
   return res.data
}

export async function getPostByQuery(search: string) {
   return axios.get<ILink[]>(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
}
