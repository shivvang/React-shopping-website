import  { css } from "styled-components";

export const mobile = (props) => css`
  @media only screen and (max-width: 425px) {
    ${props}
  }
`;
