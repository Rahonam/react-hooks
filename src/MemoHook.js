import { Fragment, useMemo } from "react";

export function MemoHook(){
    const sortedList = useMemo(()=>{
        const list = [3,5,2,7,1,4]
        return list.sort()
    },[]);
    return(
        <Fragment>
            <h2>useMemo</h2>
            <p>Below list sorting is memoized using useMemo hook.</p>
            {sortedList.map(num=><span key={num}>{num} </span>)}
        </Fragment>
    );
}