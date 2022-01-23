import { Fragment, useRef } from "react";

export function RefHook(){
    const paraRef = useRef(null);

    const updatePara = (e)=>{
        paraRef.current.innerText = e.target.value
    }

    return(
        <Fragment>
            <h2>useRef</h2>
            <p ref={paraRef}>Start typing, I'll be updated via useRef's current property.</p>
            <input onChange={updatePara} type="text"/>
        </Fragment>
    );
}