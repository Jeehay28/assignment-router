import React from 'react';

export default function Route ({ path, element }) {
    const currentPath = window.location.pathname;
    console.log(currentPath);

    if (currentPath.startsWith(path)) {
        return element;
      } else {
        return null;
      }
}
  