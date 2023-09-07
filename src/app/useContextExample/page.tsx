"use client";
import { ThemeContext } from "@/Components/Context/Themecontext";
import React, { useContext } from "react";

const UseContextExample =()=>{
  const {state, dispatch} =useContext(ThemeContext);

  console.log(state);
  
    return(
        <div className="useContextExample">
            <button onClick={()=>dispatch({type:"CHANGE_THEME"})}>Change Theme</button>
            <button onClick={()=>dispatch({type:"CHANGE_FONTSIZE", payload:99})}>Change FontSize</button>

        </div>
    )
}


export default UseContextExample;