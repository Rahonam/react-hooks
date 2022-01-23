import { Fragment, useState } from "react";

export function StateHook(){
    const [count,setCount] = useState(0);
    return (
    <Fragment>
        <h2>useState</h2>
        <p>Here the state of Count is managed by useState hook.</p>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count - 1)}>Count--</button>
        <button onClick={() => setCount(count + 1)}>Count++</button>
    </Fragment>
    )
}