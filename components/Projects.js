import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function loadGithub() {
    window.open("https://github.com/donbyrne97", '_blank'); 
}

export const Projects = () => {
    return(
        <Card>
            <h1>🛠️ Projects</h1>
            <p>I have a ton of projects in the works at any given 
                time - but here's a small sample!
                <br></br>
                <br></br>
                👇 This website was built using React, React Router,
                and React Three Fiber, along with the React Bootstrap
                library for CSS styling. The React Three Fiber library
                handles 3D rendering on the page using the WebGL 
                graphics library. You can view the full source code 
                on my GitHub page! 
                <br></br>
                <br></br>
                🎮 I'm the lead developer on <i>Void Legion,</i> a 
                real-time-strategy game written in C# using the Unity
                Engine. The game is still in development with a planned
                launch next year, but you can view some of the source code
                on GitHub! 
                <br></br>
                <br></br>
                ⌨️ I have several web projects, including Data.me, a 
                web application for viewing and studying programming 
                data structures. It was written in React with an Express
                backend. My other web projects are - you guessed it - 
                available on GitHub.
                <br></br>
                <br></br>
                <center>
                <Button onClick={loadGithub}>GitHub</Button>
                </center>
            </p>
        </Card>
    )
}