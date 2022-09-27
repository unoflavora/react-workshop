/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

const API = 'https://jsonplaceholder.typicode.com/posts/1';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function UserPage() {
  const [loading, setLoading] = useState({});
  const [postData, setPostData] = useState(null);

  // FETCH API USING SWR
  const { data, error } = useSWR(API, fetcher);
  console.log('=> FETCHER SWR', { data, error });

  useEffect(() => {
    setLoading(true);
    try {
      // NATIVE FETCH
      fetch(API)
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
