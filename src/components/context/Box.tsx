import React,{useContext} from 'react'
import { theme } from './theme'
import { ThemeContext } from './ThemeContext'

export const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div className='maindiv' style={{backgroundColor:theme.primary.main, color:theme.primary.text}}>
            Theme useContext
        </div>
    )
}
