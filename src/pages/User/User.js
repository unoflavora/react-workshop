import React from 'react';
import { Link } from 'react-router-dom';

function UserPage() {
  return (
    <div>
      <h1>User Page</h1>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default UserPage;
