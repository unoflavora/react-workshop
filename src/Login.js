import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginResult, setLoginResult] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  function typeEmail(event) {
    const value = event.target.value;
    setEmail(value);
  }

  function typePassword(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if(!email) {
      setErrorMessage('Email is required')
      return;
    }

    if(!password) {
      setErrorMessage('Password is required')
      return;
    }
    
    const requestBody = JSON.stringify({ email, password })
    fetch(`https://api.tokopedia.example.com/login`, {method: 'POST', body: requestBody}).then((response) => {
      return response.json()
    }).then((responseData) => {
      if (responseData.success) {
        setLoginResult(true);
      } else {
        setErrorMessage(responseData.errorMessage)
      }
    })
  }

  if (loginResult) {
    return <div>Welcome, {email}</div>
  }

  return (
    <React.Fragment>
      {errorMessage ? <div>{errorMessage}</div> : null}
      <form id="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={typeEmail} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={password} onChange={typePassword} />
        <button type="submit">Log In</button>
      </form>
    </React.Fragment>
  )

}