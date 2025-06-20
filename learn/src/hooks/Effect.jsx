import { useEffect } from "react";
import { useState } from "react";

const Effect = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("From useEffect");
        return()=>{
            console.log("unmounted");
        }
    },[count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <ul>
                {UserActivation.map((user)=>{
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                })}
            </ul>
            <ul>
                {postMessage.map((post) => {
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default Effect;
