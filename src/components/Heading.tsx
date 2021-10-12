import React from 'react'

type HeadingProps ={
    children:string
}

export const Heading = (props:HeadingProps) => {
    return (
        <div className='maindiv'>Children props :  {props.children}
        </div>
    )
}
