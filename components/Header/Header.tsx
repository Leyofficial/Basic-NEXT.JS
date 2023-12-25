import style from './Header.module.scss'
import {HeaderNavigation} from "@/components/Header/HeaderNavigation/HeaderNavigation";

export function Header() {
    const navLinks = [
        {
            id : 1,
            label : 'Home' ,
            href : '/'
        } ,
        {
            id : 2,
            label: 'Blog',
            href:  '/blog',
        },
        {
            id : 3,
            label: 'About',
            href: '/about'
        }
    ]
    return (
        <header className={style.block}>
              <HeaderNavigation navLinks={navLinks}/>
        </header>
    )
}
