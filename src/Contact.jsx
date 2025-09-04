import React from "react";
import "./Contact.css";
const Contact=()=>{
    return(
        <>
        <div class="info">
        <a href="mailto:nikhilareddy9333@gmail.com">nikhiareddy9333@gmail.com</a>
        <div>+91 8309891919</div>
        <a href="https://www.linkedin.com/in/nikhila-reddy-b64b60290/"> LinkedIn</a>
        <a href="https://github.com/nikhilareddy28">GitHub</a>
        </div>
        <div>
             <h3 className="style">Overview</h3>
             <hr/>
             <p class="style">Motivated computer science student with a strong foundation in frontend development through academic projects.
Eager to learn full-stack development and contribute to real-world web applications as an intern. Passionate about
solving problems, collaborating with teams, and growing into a skilled software developer.
</p>
        </div>
        <div>
            <h3 className="style">Education</h3>
            <hr/>
            <p className="style"><b>Aditya College Of Engineering And Technology, CGPA: 8.85</b><br></br>
Bachelor of Technology in Computer Science<br></br>
<b>Narayana Junior College, CGPA: 9.64 2021-2023</b><br></br>
Board of Intermediate Education
</p>
        </div>
        </>
    )
}
export default Contact;