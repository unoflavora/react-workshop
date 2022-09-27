/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserPage() {
  const [loading, setLoading] = useState({});
  const [postData, setPostData] = useState(null);

  // native fetch
  useEffect(() => {
    setLoading(true);
    try {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => setPostData(json));
    } catch (e) {
      console.error('ERR WHEN FETCHING', e);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div style={{ padding: '32px', width: '100%' }}>
      <h1>User Page</h1>
      <p>{`Loading: ${loading}`}</p>
      <div>
        <p>API Result: </p>
        <code>{JSON.stringify(postData)}</code>
      </div>
      <div style={{ height: '16px' }} />
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default UserPage;
