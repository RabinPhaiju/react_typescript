import React from 'react'

type ButtomProps = {
    variant :'primary' | 'secondary'
    children: string
}& Omit<React.ComponentProps<'button'>,'children'> 

export const HButtom = ({variant,children,onClick,...rest}:ButtomProps) => {
    return (
        <div className='maindiv'>
            <span>Wrapping html element </span>
            <button className={`class-with-${variant}`} onClick={onClick}> {children}</button>
        </div>
    )
}
