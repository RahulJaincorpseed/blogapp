import React, {useCallback, useEffect, useMemo} from "react";
import { fakeData } from "./data";

function getLen(arr){
    let count = 0;
    console.log("i am rerender");
    for(let i=0;i<arr.length;i++){
        count++; 
    }   
    return count;
}

const MyComponent = (props) => {

    const dataLen = useMemo(() => getLen(fakeData), []);

    const hnadleWindowLoad = useCallback(()=>{
        console.log("En=vent Load")
    },[])

    useEffect(()=>{
        window.addEventListener('load', hnadleWindowLoad);

        return() =>{
            window.removeEventListener('load', hnadleWindowLoad);      
        }
    },[])

  return <div>MyComponent {props.data} {dataLen}</div>;
};

export default MyComponent;
