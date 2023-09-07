import ChildComponent from "@/Utilities/Components/childrenParent/Child"
import ParentComponenet from "@/Utilities/Components/childrenParent/Parent"
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