import React from 'react';
import { number, string } from 'prop-types';

function UserInfo({ name, desc, age }) {
  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {name}</p>
      <p>Desc: {desc}</p>
      <p>Age: {age}</p>
    </div>
  );
}

UserInfo.propTypes = {
  name: string,
  desc: string,
  age: number,
};

UserInfo.defaultProps = {
  name: '',
  desc: '',
  age: 0,
};

export default UserInfo;
