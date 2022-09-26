import { useRef } from 'react';

// import loadable from '@loadable/component';

// import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { Content, IOComponent } from './index.styles';

import ContentComp from './Content'
// const ContentComp = loadable(() =>
//   import(/* webpackChunkName: "code-splitting-io-3" */ './Content'),
// );

const ThirdContent = () => {
  const ref = useRef(null);

  // const isIntersecting = useIntersectionObserver(ref);
  const isIntersecting = true

  return (
    <Content>
      {isIntersecting ? (
        <ContentComp />
      ) : (
        <IOComponent ref={ref} />
      )}
    </Content>
  );
};

export default ThirdContent;
