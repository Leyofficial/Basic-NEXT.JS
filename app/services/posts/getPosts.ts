import axios from "axios";
import {ILink} from "@/components/Header/HeaderNavigation/HeaderNavigation";

export async function getAllPosts() {
   return  axios.get<ILink[]>('https://jsonplaceholder.typicode.com/posts')
}

export async function getPostByQuery(search: string) {
   return axios.get<ILink[]>(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
}
