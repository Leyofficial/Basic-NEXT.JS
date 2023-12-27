'use client'
interface IProps {
    items : any
}
export function List({items} : IProps) {

    if (!items.length) return null

    return  (
        <ul>
            {items.map((el : any) => {
                return <li key={el}>{el}</li>
            })}
        </ul>
    )

 }