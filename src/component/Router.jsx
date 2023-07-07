import React, { useEffect, useState } from 'react';
import Home from './Home';
import About from './about';

export default function Router({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopstate = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  // Implement your routing logic to render components based on the currentPath
  let componentToRender = null;

  switch (currentPath) {
    case '/':
      componentToRender = <Home />;
      break;
    case '/about':
      componentToRender = <About />;
      break;

    // default:
    //   componentToRender = <NotFound />;
    //   break;
  }

  return <div>{componentToRender}</div>;
}
