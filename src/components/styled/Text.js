import styled, { css } from "styled-components";

export default Text = styled.p`
  color: #fff;
  opacity: 0.85;
  margin: 0;
  margin-top: 5px;
  padding: 0 0 0 2px;
  font-size: 1rem;
  line-height: 1;
  ${(props) => {
    if (props.size === "xl") {
      return css`
        opacity: 1;
        font-size: 5rem;
        padding: 0;
        font-weight: 300;
      `;
    } else if (props.size === "lg") {
      return css`
        opacity: 1;
        font-size: 2rem;
        padding: 0;
      `;
    } else if (props.size === "sm") {
      return css`
        font-size: 0.8rem;
      `;
    }
  }};

  ${(props) =>
    props.sub &&
    css`
      opacity: 0.7;
    `};

  ${(props) =>
    props.capitalize &&
    css`
      text-transform: capitalize;
    `};
`;
