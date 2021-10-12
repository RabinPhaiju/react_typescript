import React from 'react'

type StatusProps ={
    status:'loading' | 'success' | 'error'
}

const Status = (props:StatusProps) => {
    let message:string
    if(props.status ==='loading'){
        message = 'Loading...'
    }else if(props.status ==='success'){
        message = 'Data fetch successfully.'
    }else{
        message = 'Error fetching data.'
    }

    return (
        <div className='maindiv'>
          <h2>emum type props: Status: {message}</h2>
      </div>
    )
}

export default Status
