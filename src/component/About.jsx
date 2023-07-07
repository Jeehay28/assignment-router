import React from "react";

export default function About() {
    
    const navigateToMain = () => {
        window.history.pushState(null, '', '/');
      };

    return (
        <>
        <div className="center">
            <h1>about</h1>
            <a href="/" onClick={navigateToMain}>
            {/* <a href="/" > */}
                <h1>go main</h1>
            </a>
        </div>
        </>
    )
}