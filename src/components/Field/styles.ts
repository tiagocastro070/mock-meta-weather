import styled from "styled-components";

export const FieldContainer = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.normal};
  font-weight: 900;

  span {
    display: block;
    font-size: ${(props) => props.theme.fontSizes.small};
    font-weight: normal;
  }
`;
