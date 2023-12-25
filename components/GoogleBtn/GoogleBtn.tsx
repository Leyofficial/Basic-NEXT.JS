'use client'
import {signIn} from "next-auth/react";
import { MouseEventHandler } from "react";
import {useSearchParams} from "next/navigation";

export function GoogleBtn() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/'
    console.log(searchParams.get('callbackUrl'))
    const handleClick: MouseEventHandler<HTMLButtonElement> | undefined = () => {
        signIn('google' , {
            callbackUrl,
        });
    }
    return (
        <button onClick={handleClick}>Google</button>
    )
}