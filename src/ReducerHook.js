import { Fragment, useReducer } from "react";

export function ReducerHook(){
    const reducer = (currentState,action)=>{
        switch (action.type) {
            case 'UPPERCASE':
                return {
                    ...currentState,
                    name: currentState.name.toUpperCase()
                }
            case 'LOWERCASE':
                return {
                    ...currentState,
                    name: currentState.name.toLowerCase()
                }
            default:
                return currentState;
        }
    }
    const [state,dispatch] = useReducer(reducer,{name: "Manohar Kumar"})
    return(
        <Fragment>
            <h2>useReducer</h2>
            <p>Here the CASE of string is managed by useReducer hook.</p>
            <p>{state.name}</p>
            <button onClick={() => dispatch({type: 'UPPERCASE'})}>UPPERCASE</button>
            <button onClick={() => dispatch({type: 'LOWERCASE'})}>LOWERCASE</button>
        </Fragment>
    );
}