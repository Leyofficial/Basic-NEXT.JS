'use client'

import {ChangeEventHandler} from "react";

type ISearch = {
    value: string,
    onChange: ChangeEventHandler<any>
    placeholder?: string,
    children?: string
}

export function Search({value, onChange, children = 'Search', placeholder = 'search...'}: ISearch) {
    return (
        <label>
            {children}
            <input type="text" placeholder={placeholder} onChange={onChange} value={value}/>
        </label>
    )
}