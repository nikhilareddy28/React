 import React from "react";
import { useState,useEffect } from "react";
import './FunctionComponent.css'
function Task(){
    const [CompleteData,setCompleteData]=useState([
        {
            "name":"sai"
        },
        {
            "name":"sri"
        },
        {
            "name":"namitha"
        },
        {
            "name":"nikhila"
        },
        {
            "name":"durga"
        },
        {
            "name":"dharani"
        },
        {
            "name":"uma"
        },
        {
            "name":"hasee"
        }
    ])
    const [QueryResult,setQueryResult]=useState([])
    const [UserQuery,setUserQuery]=useState("")
    const Capture=(event)=>{
       setUserQuery(event.target.value)
    }
    useEffect(()=>{
        if(UserQuery!=""){
        var arr=CompleteData.filter(ele=>ele.name.includes(UserQuery))
        setQueryResult(arr)
        }
        else{
            setQueryResult(CompleteData)
        }
    },[UserQuery])
    return(
        <>
        <input type="text" placeholder="Search..." onChange={(event)=>Capture(event)}/>
        <div className="parent">
            {
            QueryResult.map((ele)=>{
              return <div className="card1">{ele.name}</div>
            })
        }
        </div>
        </>
    )
}
export default Task