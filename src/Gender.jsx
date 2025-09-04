import React from "react";
const Gender=()=>{
    return(
        <form>
            <label> Gender:</label>
            <input type="radio" name="Gender" ></input><label>male</label>
             <input type="radio" name="Gender" ></input><label>female</label>
              <input type="radio" name="Gender" ></input><label>other</label>
            
        </form>
    )
}
export default Gender;