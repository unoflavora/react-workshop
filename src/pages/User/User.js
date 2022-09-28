import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from '../../components/UserInfo';

function UserPage() {
  return (
    <div style={{ padding: '32px' }}>
      <h1>User Page</h1>
      <hr />
      <UserInfo name="Indra Kusuma" desc="Software Engineer Web Platform" age={25} />
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default UserPage;
