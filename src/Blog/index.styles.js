import styled from 'styled-components';

export const Container = styled.div`
  max-width: 75%;
  margin: 0 auto;

  img {
    width: 100%;
  }

  h1 {
    font-size: 6.25rem;
  }


  h3 {
    font-size: 1.875rem;
  }

  p {
    font-size: 1.25rem;
  }
`;

export const MoreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 3rem;
  column-gap: 3rem;
  grid-row-gap: 6rem;
  row-gap: 6rem;
`;

export const FooterContainer = styled.div`
  margin-top: 4rem;
  background-color: rgb(234,234,234);
  padding: 7rem 0;
  text-align: center;

  h3 {
    font-size: 1.875rem;
  }
`
