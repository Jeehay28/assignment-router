import React from "react";

export default function About() {
    
    const navigateToMain = () => {
        window.history.pushState(null, '', '/');
        // Call your custom routing logic here
      };

    return (
        <>
        <div className="center">
        <h1>about</h1>
        <a href="/" onClick={navigateToMain}>
        <h1>go main</h1>
        </a>

        </div>
        
            
        </>
    )
}