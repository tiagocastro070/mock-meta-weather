import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 10px 20px;
  position: relative;
  outline: none;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.N20};
  background-color: ${(props) => props.theme.colors.N20};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.normal};
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.N30};
  }

  &:active {
    border: 1px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.N40};
  }

  &:focus,
  &:focus-visible {
    &:before {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      top: -3px;
      left: -3px;
      opacity: 1;
    }
  }

  &:before {
    content: "";
    display: block;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    position: absolute;
    top: -6px;
    left: -6px;
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    opacity: 0;
    z-index: -1;
    transition: all 0.2s ease;
  }

  &.is-active {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
