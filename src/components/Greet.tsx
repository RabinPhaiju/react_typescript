import React from 'react'

type GreetProps = {
    name:string
    messageCount?:number
    isLoggnedIn:boolean
}

const Greet = (props:GreetProps) => {
    const {messageCount = 0} = props
    return (
        <div className='maindiv'>
            <h4>no. of props : 
            {props.isLoggnedIn ?
            ` Welcome to ${props.name}. You have ${messageCount} unread messages` :'Welcome Guest'
                    
        }</h4>
        </div>
    )
}

export default Greet
