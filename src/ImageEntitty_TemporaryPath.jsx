import React from "react";
import { useState } from "react";
function ImageEntity_TemporaryPath()
{
    const [imagepath,setimagepath]=useState(null)
    const GetData=(event)=>{
        const file=event.target.files[0]
        const path=URL.createObjectURL(file)
        setimagepath(path)
    }
    return(
        <>
        <input type="file" onChange={(event)=> GetData(event)}/>
        {
            imagepath ? <img src={imagepath} alt="PathisWrong"/> : <></>
        }
        </>
    )
}
export default  ImageEntity_TemporaryPath;