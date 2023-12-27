import style from './Home.module.scss'
import {List} from "@/components/List/List";

const data = [
    'HTML' ,
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Node js',
    'Next js'
]

export default function HomePage() {
  return (
      <div>
        <h1 className={style.title}>Welcome to NextJS world</h1>
          <List items={data}/>
      </div>
  )
}
