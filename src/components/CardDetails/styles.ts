import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 10px #000;
  color: ${(props) => props.theme.colors.N10};
  text-align: center;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.large};
`;

export const CardImage = styled.img`
  display: block;
  max-width: 75px;
  margin: 0 auto;
`;

export const CardTemperature = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.xLarge};
  font-weight: bold;
  line-height: 1;
`;

export const CardFieldsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
`;
