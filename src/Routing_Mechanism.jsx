import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Contacts from "./Contacts";
// import Page_NotFound from "./Page_NotFound";
function Routing_Mechanism()
{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Service/>} />
            <Route path="/contact" element={<Contacts/>} />
            {/* <Route path="*" element={<Page_NotFound/>} /> */}
        </Routes>
        </BrowserRouter>
        </>
    )
} 
export default Routing_Mechanism