import React,{useContext} from 'react'
import { UserContext } from './UserContext'

export const User1 = () => {
    const userContext = useContext(UserContext)

    const handleLogin =()=>{
            userContext.setUser({
                name:'rabin',
                email:'rabin@gmail.com'
        })
    }
    const handleLogout =()=>{
            userContext.setUser(null)
    }
    return (
        <div className='maindiv'>
            <span> useContext : </span>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name}: </div>
            <div>Email address: {userContext.user?.email}</div>
        </div>
    )
}
