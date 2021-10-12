import React from 'react'
import Greet from '../Greet'

const CustomCompoments = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div className='maindiv'>
            <span>Extrac props types from other components : </span>
            name= {props.name}
        </div>
    )
}

export default CustomCompoments
