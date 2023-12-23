import Link from "next/link";
import style from './Header.module.scss'

export function Header() {
    return (
        <header className={style.block}>
            <div className={style.links}>
                <Link  className={style.link} href={'/'}>Home</Link>
                <Link  className={style.link} href={'/blog'}>Blog</Link>
                <Link  className={style.link} href={'/about'}>About</Link>
            </div>
        </header>
    )
}
