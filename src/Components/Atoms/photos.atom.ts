import { styled } from "styled-components";
import { MainTheme } from "../style";
export const Photo = styled.img`
  width: 30rem;
  /* border: 1px solid ${MainTheme.emphasis}; */
  border-radius: 8rem;
  filter: grayscale(100%);
  @media (max-width: 820px) {
    width: 20rem;
    border-radius: 4rem;
  }

  @media (max-width: 480px) {
    width: 0rem;
    border-radius: 2rem;
  }
`;

export const ToolIcon = styled.img`
  width: 100px;
`;
