import React from 'react';

const Resume = ()=> {
    return(
        <div>
            <hr/>
            <h1>Raj Sagar</h1>
            <hr/>
            <h2 style={{textDecoration : 'underline'}}>Education</h2>
            <h4 style={{textDecoration : 'underline'}}>APJAKTU</h4>
            <ul>
                <li>BTech in Computer Science & Engineering.</li>
                <li>Class of 2018</li>
            </ul>
            <h2 style={{ textDecoration: "underline" }}>Work History</h2>
            <ul>
                <li>Business Analyst @Fanlytiks (Aug 2018 - Present)</li>
                <li>Intern @Alphonso Inc. (June 2018 - Aug 2018)</li>
            </ul>
            <h2 style={{ textDecoration: "underline" }}>Skills</h2>
             <ul>
               <li>ReactJS</li>
               <li>Python</li>
               <li>SQL</li>
               <li>Javascript</li>
               <li>HTML+CSS</li>
               <li>Pandas</li>
            </ul>
            <hr/>
        </div>
    )
}

export default Resume;