'use client'
import {FormEventHandler, useState} from "react";
import {getPostByQuery} from "@/app/services/posts/getPosts";
import useSWR from "swr";

export function PostSearch() {
    const {mutate} = useSWR('posts')
    const [search , setSearch] = useState<string>('');

   const  handleSubmit : FormEventHandler<HTMLFormElement> =  (e) => {
       e.preventDefault();
       getPostByQuery(search).then((res) => mutate(res.data))
    }

    return  (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setSearch(e.target.value)} type="search" value={search}/>
            <button type={'submit'}>Submit</button>
        </form>

    )
}