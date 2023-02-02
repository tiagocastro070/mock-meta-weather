import styled from "styled-components";

export const Spinner = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  margin: 0 auto;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: white;
  border-right-color: white;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
