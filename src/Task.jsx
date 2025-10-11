 import React from "react";
import { useState,useEffect } from "react";
import './FunctionComponent.css'
function Task(){
    const [CompleteData,setCompleteData]=useState([
        {
            "name":"rarerabbit"
        },
        {
            "name":"teamspirit"
        },
        {
            "name":"gucci"
        },
        {
            "name":"us-polo"
        },
        {
            "name":"titan"
        },
        {
            "name":"casio"
        },
        {
            "name":"crocs"
        },
        {
            "name":"sketchers"
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
        <div className="serach">
        <input type="text" placeholder="Search..." onChange={(event)=>Capture(event)}/> </div>aaaaaaa
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