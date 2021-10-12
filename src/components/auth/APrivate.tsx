import React from 'react'
import ALogin from './ALogin'
import { ProfileProps } from './AProfile'

type PrivateProps ={
    isLoggedIn:boolean
    component: React.ComponentType<ProfileProps>
}

export const APrivate = ({isLoggedIn, component:Component}:PrivateProps) => {
   if(isLoggedIn){
       return <Component name='rabin' />
   }else{
       return <ALogin />
   }
}
