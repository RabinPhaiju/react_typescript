import React, { Component } from 'react'

type CounterProps = {
    message:string
}

type CounterState = {
    count:number
}

export default class Counter1 extends Component<CounterProps,CounterState> {
    state = {
        count:0
    }
handleClick = ()=>{
    this.setState((prevState)=>({count: prevState.count + 1}))
}

    render() {
        return (
            <div className='maindiv'>
                {this.props.message}  
                <button onClick={this.handleClick}> Increment </button>
                 {this.state.count}
            </div>
        )
    }
}
