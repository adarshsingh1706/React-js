import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  let location = useLocation();

  return (
    <div>
      <h2>Home Page</h2>
      <p>Current URL: {location.pathname}</p>
    </div>
  );
}

export default Home;
