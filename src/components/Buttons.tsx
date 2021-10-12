import React from 'react'

type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>,id: number)=> void
}

export const Buttons = (props:ButtonProps) => {
    return <button className='maindiv' onClick={(event)=>props.handleClick(event,1)}>Click</button>
}
