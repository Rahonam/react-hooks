import { Fragment, useContext } from "react";
import { UserContext } from "./App";

export function ContextHook(){
    const user = useContext(UserContext);
    return(
        <Fragment>
            <h2>useContext</h2>
            <p>Below string is stored in context API using 'createContext' and consumed by 'useContext' hook.</p>
            <p>{user.name}</p>
        </Fragment>
    );
}