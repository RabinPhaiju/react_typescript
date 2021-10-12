import React,{useReducer} from 'react'

type CounterState={
    count:number
}

type UpdateAction ={
    type:'increment' | 'decrement'
    payload:number
}
type ResetAction ={
    type:'reset'
}
// Discriminated union
type CounterAction= UpdateAction | ResetAction

const initialState = {count:0}

function reducer(state: CounterState, action: CounterAction){
    switch(action.type){
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const Couter = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <div className='maindiv'>
            <i>Discriminated union in Reeact Reducer | </i>
            Count: {state.count}
            <button onClick={()=>dispatch({type:'increment',payload:10})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',payload:10})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}
