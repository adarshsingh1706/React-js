import React from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  let location = useLocation();

  return (
    <div>
      <h2>About Page</h2>
      <p>Current URL: {location.pathname}</p>
    </div>
  );
}

export default About;
