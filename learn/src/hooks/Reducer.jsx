import { useReducer } from "react";

let initialValue=0

let initialReact={like:0,dislike:0}

const counter=(state,action)=>{
    switch(action.type){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialValue;
        default:
            return state;
    }
}

const likeCounter=(state,action)=>{
    switch(action.type){
        case 'like':
            return {...state,like:state.like + 1};
        case 'dislike':
            return {...state,dislike:state.dislike + 1};
        case 'reset':
            return initialReact;
        default:
            return state;
    }
}

const Reducer=()=>{
    const [count,dispatch]=React.useReducer(counter,initialValue);
    const[likeCount,dispatch1]=useReducer(likeCounter,initialReact);
    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>   
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            <h2>Task</h2>
            <button onClick={()=>dispatch1({type:'like'})}>👍{likeCount.like}</button>
            <button onClick={()=>dispatch1({type:'dislike'})}>👎{likeCount.dislike}</button>
            <button onClick={()=>dispatch1({type:'reset'})}>Reset</button>
        </div>
    )
}

export default Reducer;