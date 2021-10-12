import React,{useState} from 'react'

type InputProps = {
    value:string
    placeholder?:string
    handleChange :(event:React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props:InputProps) => {
    const [state, setstate] = useState(props.value)

    return (
        <div className='maindiv'>
            <input type="text" placeholder={props.placeholder} 
            value={state} onChange={e=>{setstate(e.target.value); props.handleChange(e);}} />
        </div>
    )
}
