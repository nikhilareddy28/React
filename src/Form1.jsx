import React from "react";
import { useState } from "react";
import'./Form.css';
const Form1=()=>{
    const [data,setdata]=useState(0)
    const Capture=(event)=>{
        const userdata=event.target.value;
        setdata(userdata);
        console.log(data);
    }
     const Getdata=(event)=>{
        console.log(data);
     }
     
    return(
        <form>
            <label> name:  </label>
            <input type="text" placeholder="enter product  name"onChange={(event)=>Capture(event)}></input><br></br><br></br>
            <label>Brand:  </label>
            <input type="text" placeholder="enter brand name"onChange={(event)=>Capture(event)}></input><br></br><br></br>
    
             <label>Size:  </label>
            <input type="text" placeholder="enter Size"onChange={(event)=>Capture(event)}></input><br></br><br></br>
            
            <label>price:  </label>
            <input type="number" placeholder="enter price"onChange={(event)=>Capture(event)}></input><br></br><br></br>
            <label>choose image  </label>
            <input type="file" placeholder="upload image"></input><br></br><br></br>
            
             <label> Description: </label>
           <textarea placeholder="comments"onChange={(event)=>Capture(event)}></textarea><br></br><br></br>
            <button >Submit</button>
            <button> Reset</button>
            
            
            


        </form>
    )
}
export default Form1;