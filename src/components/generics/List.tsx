import React from 'react'

type ListProps<T> = {
    items:T[]
    onClick : (value:T) => void
}

export const List = <T extends number | string >({items, onClick}:ListProps<T>) => {
    return (
        <div className='maindiv'>
            <span>List of items | Generic List props</span>
            {items.map((item,index)=>{
                return (
                    <div key={index} onClick={()=>onClick(item)}>{item}</div>
                )
            })}
        </div>
    )
}
