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

const Context = createContext();
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

const Child1 = () => {
  const { dispatch } = useContext(Context);
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
  const { state } = useContext(Context);
  console.log('render child 2');
  return <p>{state.count}</p>;
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
