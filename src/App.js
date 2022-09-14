/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const ChildComponent = () => {
  useEffect(() => {
    throw new Error('hell')
  }, [])
  return (
    <p>hello</p>
  )
}

const App = () => {
  return (
    <>
      <p>hello world</p>
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    </>

  )
}


export default App;
