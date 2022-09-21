import { useRef } from 'react';

// import loadable from '@loadable/component';

// import useIntersectionObserver from '../../hooks/useIntersectionObserver';


import ThirdContentComp from './Content';

// const ThirdContentComp = loadable(() =>
//   import(/* webpackChunkName: "code-splitting-io-third" */ '../ThirdContent/Content'),
// );

const ThirdContentIndex = () => {
  const ref3 = useRef(null);

  // const isIntersecting = useIntersectionObserver(ref3);
  const isIntersecting = true

  return (
    <div className='content'>
      {isIntersecting ? <ThirdContentComp /> : <div ref={ref3} style={{ height: 2, width: 2 }} >haha</div>}
    </div>
  );
};

export default ThirdContentIndex;
