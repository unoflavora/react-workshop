import './CSIO.css';

import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';

const CodeSplitting = () => {
  return (
    <div className="container">
      <div>
        <img src="https://dummyimage.com/1000x400/c9c9c9/ffffff.jpg" />
        <h1>First Title</h1>
      </div>

      <SecondContent />
      <ThirdContent />
    </div>
  );
};

export default CodeSplitting;
