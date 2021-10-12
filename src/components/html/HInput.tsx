import React from 'react'

type InputProps = React.ComponentProps<'input'>

export const HInput = (props:InputProps) => {
    return <input className='maindiv' placeholder='Wrapping input element' {...props} />
}
