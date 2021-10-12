import React from 'react'

type PersonListProps=  {
    names:{
        id:number
        first:string
        last:string
    }[]
}

const PersonList = (props:PersonListProps) => {
    return (
        <div className='maindiv'>
            list of dictionary (object):
           {props.names.map(name=>{
               return(
                   <p key={name.id}>{name.first} {name.last}</p>
                   )
           })}
        </div>
    )
}

export default PersonList
