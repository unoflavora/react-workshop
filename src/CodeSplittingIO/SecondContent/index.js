import { useRef } from 'react';

// import loadable from '@loadable/component';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';


import SecondContentComp from './Content';

// const SecondContentComp = loadable(() =>
//   import(/* webpackChunkName: "code-splitting-io-second" */ '../SecondContent/Content'),
// );

const SecondContentIndex = () => {
  const ref2 = useRef(null);

  const isIntersecting = useIntersectionObserver(ref2);

  return (
    <div className='content'>
      {isIntersecting ? <SecondContentComp /> : <div ref={ref2} style={{ height: 1, width: 1 }} >hehe</div>}
    </div>
  );
};

export default SecondContentIndex;
