'use client'
import {FormEventHandler, useState} from "react";
import {getPostByQuery} from "@/app/services/posts/getPosts";

type IPostSearch = {
    callback : (value : any[]) => void
}

export function PostSearch({callback} : IPostSearch) {
    const [search , setSearch] = useState<string>('');

   const  handleSubmit : FormEventHandler<HTMLFormElement> =  (e) => {
       e.preventDefault();
       getPostByQuery(search).then((res) => callback(res.data))
    }

    return  (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setSearch(e.target.value)} type="search" value={search}/>
            <button type={'submit'}>Submit</button>
        </form>

    )
}