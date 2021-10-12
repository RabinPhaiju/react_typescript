import React from 'react'

type PersonProps ={
    name:{
        first:string
        last:string
    }
}

const Person = (props:PersonProps) => {
    return (
        <div className='maindiv'>
            dict: {props.name.first} {props.name.last}
        </div>
    )
}

export default Person
