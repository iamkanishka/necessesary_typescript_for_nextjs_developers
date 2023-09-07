import React from "react";

const ParentComponenet = ({ children }: {children:React.ReactNode}) => {
return (
    <div>
      <h1>This is the parent</h1>
      {children}
    </div>
  );
};

export default ParentComponenet;
