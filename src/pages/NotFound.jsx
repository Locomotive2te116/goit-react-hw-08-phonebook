import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h2>Sorry page not found</h2>
      <Link to="/">Go to Home page</Link>
    </div>
  );
};
