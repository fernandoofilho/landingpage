import { styled } from "styled-components"
import { MainTheme } from "../style"

export const Content = styled.div`
    color: white;
    &.Emphasis {
        font-weight: 400;
        font-size: 60px;
    }
    &.MinorEmphasis  {
        font-weight: 300;
        font-size: 50px;
    } 
    &.ColoredEmphasis { 
        color: ${MainTheme.emphasis};
        font-weight: 800;
        font-size: 60px;
    }
`