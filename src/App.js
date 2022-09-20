import React, { createContext, useContext, useReducer } from 'react';
import './App.css';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const ContextValue = createContext(0);
const ContextDispatch = createContext();

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextDispatch.Provider value={dispatch}>
      <ContextValue.Provider value={state}>{children}</ContextValue.Provider>
    </ContextDispatch.Provider>
  );
};

const Child1 = () => {
  const dispatch = useContext(ContextDispatch);
  console.log('render button');
  return (
    <div style={{ width: '100%' }}>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: 'increment',
          });
        }}
      >
        click me
      </button>
    </div>
  );
};

const Child2 = () => {
  const { count } = useContext(ContextValue);
  console.log('render child 2');
  return <p>{count}</p>;
};
const App = () => {
  return (
    <Provider>
      <Child1 />
      <Child2 />
    </Provider>
  );
};

export default App;
