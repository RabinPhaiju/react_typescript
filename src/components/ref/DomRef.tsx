import React,{useRef,useEffect} from 'react'

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div className='maindiv'>
            <span>useRef : </span>
            <input type="text" name="" id="" ref={inputRef}/>
        </div>
    )
}
