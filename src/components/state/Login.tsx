import React,{useState} from 'react'

export const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () =>{
        setIsLoggedIn(true)
    }
    const handleLogout = () =>{
    setIsLoggedIn(false)}
    return (
        <div className='maindiv'>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn? 'logged in ': 'logout'}</div>
        </div>
    )
}
