import React from 'react'

export type ProfileProps = {
    name:string
}

const AProfile = ({name}:ProfileProps) => {
    return (
        <div className='maindiv'>
             Private profile componentProp. Name is : {name} 
        </div>
    )
}

export default AProfile
