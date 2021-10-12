import React,{useState} from 'react'

type AuthUser = {
    name:string
    email:string
}

export const User = (props:AuthUser) => {
    const [user, setUser] = useState<null | AuthUser>(null)
    // const [user, setUser] = useState<AuthUser>({} as AuthUser)
    // if we dont have to logout -> type change of the variable.
    const handleLogin = () =>{
        setUser({
            name:props.name,
            email:props.email
        })
    }
    const handleLogout = () =>{
        setUser(null)}
    return (
        <div className='maindiv'>
           <span> type union </span>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {user? 'logged in ': 'logout'}</div>
            <span>Username : {user?.name}</span>
            <span>Email : {user?.email}</span>
        </div>
    )
}
