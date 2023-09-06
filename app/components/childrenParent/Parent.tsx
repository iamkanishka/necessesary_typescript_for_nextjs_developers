import React from "react";

const parent  = ({children}:{children:React.ReactNode})=>{
  return (
    <div>
     <h1>This is a Parent Component</h1>
     {children}
    </div>
  )
}