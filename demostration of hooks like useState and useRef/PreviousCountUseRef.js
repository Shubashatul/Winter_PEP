import React,{useRef,useState,useEffect} from 'react';

const PreviousCountUseRef =()=>{
    const prevCountRef=useRef(null);
    const [count,setCount]=useState(5);
    useEffect(()=>{
        prevCountRef.current=count;
        
    },[count])
    return(
        <>
      
        <h1>Current count : {count}</h1>
        <h3>previous Count:{prevCountRef.current}</h3>
        <button onClick={()=>setCount(count+1)}>increment</button>
        </>
    )
}

export default PreviousCountUseRef;