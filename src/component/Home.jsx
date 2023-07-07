import React from 'react';

export default function Home() {
  const navigateToAbout = () => {
    window.history.pushState(null, '', '/about');
  };

  return (
    <>
      <div className="center">
        <h1>root</h1>
        <a href="/about" onClick={navigateToAbout}>
        {/* <a href="/about" > */}
          <h1>about</h1>
        </a>
      </div>
    </>
  );
}
