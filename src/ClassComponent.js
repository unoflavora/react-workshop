import { Component } from 'react';

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log('did mount');
  }

  shouldComponentUpdate() {
    console.log('should update');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('snapshot before update');
    return null;
  }

  componentDidUpdate() {
    console.log('did update');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  render() {
    const { counter } = this.state;
    return (
      <>
        <p>{`counter: ${counter}`}</p>
        <button
          type="button"
          onClick={() => {
            this.setState((prev) => {
              return {
                counter: prev.counter + 1,
              };
            });
          }}
        >
          click
        </button>
      </>
    );
  }
}

export default ClassComponent;
