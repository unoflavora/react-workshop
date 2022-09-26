import { Container } from './index.styles';

import loadable from '@loadable/component';

const SecondContent = loadable(() =>
  import(/* webpackChunkName: "code-splitting-second-content" */ './SecondContent'),
);

const CodeSplitting = () => {
  return (
    <Container>
      <div>
        <img src="https://dummyimage.com/1000x400/c9c9c9/ffffff.jpg" loading="lazy"/>
        <h1>First Title</h1>
      </div>

      <SecondContent />
    </Container>
  );
};

export default CodeSplitting;
