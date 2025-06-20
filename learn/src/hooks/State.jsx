import { useState } from 'react';
const State =()=>{
    const[state, setState] = useState(0);
    //const handleIncrement=()=>{
      //  setCount(count+1)
    //}
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>(setState(state+1))}>Like👍</button>
            <button onClick={()=>(setState(state-1))}>Dislike👎</button>
            <button onClick={()=>(setState(0))}>Reset🔃</button>
        </div>
    )
}

export default State