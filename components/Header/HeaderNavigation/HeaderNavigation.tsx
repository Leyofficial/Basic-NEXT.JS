'use client'
import {usePathname} from "next/navigation";
import style from '../Header.module.scss'
import Link from "next/link";
import {ILink} from "@/types/types";
import {signOut, useSession} from "next-auth/react";



type Props = {
    navLinks : ILink[]
}

export function HeaderNavigation({navLinks} : Props) {
    const session = useSession();
    const pathname = usePathname();


    return (
        <div className={style.links}>
            {navLinks.map((link) => {
                const isActive = link.href === pathname;
                return <Link key={link.id} className={`${style.link} ${isActive ? style.active : null}`} href={link.href}>{link.label}</Link>
                }
            )}
            {session?.data && <Link className={style.link} href={'/profile'}>Profile</Link>}
            {session?.data ? <Link className={style.link}  onClick={() => signOut({
                callbackUrl : '/'
            })} href='#'>Sign out</Link> : <Link className={style.link}  href={'/api/auth/signin'}>Sign in</Link>}
        </div>
    )
}