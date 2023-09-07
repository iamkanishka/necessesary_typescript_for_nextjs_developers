"use client"
import React, { useEffect, useRef } from 'react';

const UseRefExample =()=>{

const inputRef  = useRef<HTMLInputElement>(null);
const usernameRef  = useRef<HTMLInputElement>(null);


useEffect(()=>{
 inputRef.current?.focus();
},[]);

const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
   console.log(usernameRef.current?.value);
   
}

    return (
        <div className='useRefExample'>
            <input ref={inputRef} type="text" placeholder='focus Here' />
            <input ref={usernameRef} type="text" placeholder='username' />
            <button onClick={handleClick}>Submit</button>
       </div>
    )
}

export default  UseRefExample;