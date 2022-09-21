import { object } from "prop-types";

const ThirdContentComp = ({ imageProps = {} }) => {
  const img3Props = { src: 'https://dummyimage.com/1500x400/c9c9c9/ffffff.jpg', ...imageProps };

  return (
    <div>
      <img {...img3Props} loading="lazy"/>
      <h1>Third Title</h1>
    </div>
  );
};

ThirdContentComp.propTypes = {
  imageProps: object
}

export default ThirdContentComp;
