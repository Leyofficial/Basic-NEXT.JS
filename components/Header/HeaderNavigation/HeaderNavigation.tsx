'use client'
import {usePathname} from "next/navigation";
import style from '../Header.module.scss'
import Link from "next/link";
import {ILink} from "@/app/types/types";



type Props = {
    navLinks : ILink[]
}

export function HeaderNavigation({navLinks} : Props) {
    const pathname = usePathname();

    return (
        <div className={style.links}>
            {navLinks.map((link) => {
                const isActive = link.href === pathname;
                return <Link key={link.id} className={`${style.link} ${isActive ? style.active : null}`} href={link.href}>{link.label}</Link>
                }
            )}
        </div>
    )
}