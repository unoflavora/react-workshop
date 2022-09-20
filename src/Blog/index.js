import CoverImg from './assets/cover.webp';

import { Container, MoreContainer, FooterContainer } from './index.styles';

const Headline = () => {
  return (
    <div>
      <img src={CoverImg} />
      <h3>Dynamic Routing and Static Generation</h3>
      <p>March 16, 2020</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit
        amet nulla facilities morbi tempus.
      </p>
    </div>
  );
};

const BlogContent = () => {
  return (
    <div>
      <img src={CoverImg} />
      <h3>Dynamic Routing and Static Generation</h3>
      <p>March 16, 2020</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit
        amet nulla facilities morbi tempus.
      </p>
    </div>
  );
};

const Footer = () => {
  return <FooterContainer><h3>Tokopedia DevCamp 2022</h3></FooterContainer>;
};

const Blog = () => {
  return (
    <>
      <Container>
        <div>
          <h1>Blog.</h1>
          <p>A simple blog example</p>
        </div>
        <Headline />
        <div>
          <h1>More Stories</h1>
          <MoreContainer>
            <BlogContent />
            <BlogContent />
            <BlogContent />
            <BlogContent />
          </MoreContainer>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
