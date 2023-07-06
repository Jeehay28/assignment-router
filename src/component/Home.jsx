import React from 'react';

export default function Home() {
  const navigateToAbout = () => {
    window.history.pushState(null, '', '/about');
    // Call your custom routing logic here
  };

  return (
    <>
      <div className="center">
        <h1>root</h1>
        <a href="/about" onClick={navigateToAbout}>
          <h1>about</h1>
        </a>
      </div>
    </>
  );
}
