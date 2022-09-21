import { useEffect } from 'react';

import { Box } from './index.styles';

const IOComp = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.getAttribute('class'), 'visible');
          observer.unobserve(entry.target);
        }
      });
    });

    boxes.forEach((box) => {
      observer.observe(box);
    });
  }, []);

  return (
    <div>
      <Box className="box box1">Box 1</Box>
      <Box className="box box2">Box 2</Box>
      <Box className="box box3">Box 3</Box>
      <Box className="box box4">Box 4</Box>
    </div>
  );
};

export default IOComp;
