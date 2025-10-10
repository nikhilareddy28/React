import React, { useState } from "react";
import './Taskreact.css';

function Taskreact(){
     const[data,setdata]=useState();
   return(
    <>
       <div className="heading">
           <button className="submits">Add</button>
           <button className="submits">Preview</button>
       </div>
    </>
   )
}
export default Taskreact; 