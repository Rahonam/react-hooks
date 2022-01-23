import { Fragment, useEffect } from "react";

export function EffectHook(){
    useEffect(()=>{
        alert("Component did mount, run side effects.")
        return ()=>{
            alert("Component will unmount, run cleanup.")
        }
    },[])
    return(
        <Fragment>
            <h2>useEffect</h2>
            <p>The alert "Component did mount, run side effects" is poped by useEffect hook.</p>
        </Fragment>
    );
}