import React from "react";  
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function loadLinkedIn() {
    var win = window.open('https://linkedin.com/in/brandonebyrne', '_blank'); 
}

export const About = () => {
    return(
        <Card>
            <h1>👋 Welcome!</h1>
            <p>💻 I am a full stack software and web developer from 
            Massachusetts. My skillset includes JavaScript and 
            TypeScript, along with various web libraries using
            those languages (such as React, ThreeJS, and Express).
            I'm also familiar with other languages such as C#, 
            C++, Python, and Java. You can check out some of my 
            technical skills below!
            <br></br>
            <br></br>
            📦 Object Oriented Programming (OOP) expertise.
            <br></br>
            ⚛️ Knowledge of popular web frameworks such as 
            React, Angular, Svelte, and more.
            <br></br>
            🌐 Knowledge of networking and full-stack software
            development.
            <br></br>
            🐧 Knowledge of all major operating systems (Windows,
            macOS, and Linux).
            <br></br>
            <br></br>
            <center>
            <Button onClick={loadLinkedIn}>Contact Me</Button>
            </center>
            </p>
        </Card>
    )
}