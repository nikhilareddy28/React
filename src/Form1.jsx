import React from "react";
import'./Form.css';
const Form1=()=>{
    return(
        <form>
            <label> name:  </label>
            <input type="text" placeholder="enter product  name"></input><br></br><br></br>
            <label>Brand:  </label>
            <input type="text" placeholder="enter brand name"></input><br></br><br></br>
    
             <label>Size:  </label>
            <input type="text" placeholder="enter Size"></input><br></br><br></br>
            
            <label>price:  </label>
            <input type="number" placeholder="enter price"></input><br></br><br></br>
            <label>choose image  </label>
            <input type="file" placeholder="upload image"></input><br></br><br></br>
            <button>Submit</button>
            
            


        </form>
    )
}
export default Form1;