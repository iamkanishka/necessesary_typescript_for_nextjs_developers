import ChildComponent from "@/Components/childrenParent/Child"
import ParentComponenet from "@/Components/childrenParent/Parent"


import React from "react";

 const ParentChildExample  =()=>{
    return(
        <div> 
             <ParentComponenet>
                <ChildComponent/>
             </ParentComponenet>
        </div>
    )
 }

 export default ParentChildExample