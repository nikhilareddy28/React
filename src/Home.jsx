import React from "react";
import { Link } from "react-router-dom";
function Home(){
   return(
    <>
      <h1>Home Page</h1>
      <Link to="/services">Goto Services</Link>
      <Link to="/contact">Goto Contact</Link>
    </>
   );
}
export default Home;