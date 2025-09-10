import React from "react";
import "./FunctionComponent.css"
// import Myimage from "./assets/react.svg"

const FunctionComponent = (prop) => {
  console.log(prop);
    return(
        <>
        
             <div className="card1">
                <div className="image"> <img src="{prop.data.image} "alt="image"></img></div>
                <div className="info">
                  <div>price: {prop.data.price} </div>
                    <div>brand: {prop.data.brand}</div>
                </div>
             </div>
        
           
        </>
    )
};
export default  FunctionComponent;