import styled from "styled-components";

// display: flex;
// align-items: stretch;
// gap: 20px;
// max-width: 1200px;
// padding: 20px;
// margin: 0 auto;

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: stretch;
  gap: 20px;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;

  & > li:first-child {
    grid-area: 1 / 1 / 2 / 3;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;

    & > li:first-child {
      grid-area: auto;
    }
  }
`;
