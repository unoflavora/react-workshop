import { useEffect, useState } from 'react';

const FunctionalComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('did mount');
  }, []);

  useEffect(() => {
    if (counter === 0) {
      return;
    }
    console.log('did update');
  }, [counter]);

  useEffect(() => {
    return () => {
      console.log('willUnmount');
    };
  }, []);

  return (
    <>
      <p>{`counter: ${counter}`}</p>
      <button
        type="button"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        click
      </button>
    </>
  );
};

export default FunctionalComponent;
