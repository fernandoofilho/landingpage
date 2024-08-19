import { styled } from "styled-components";
import { MainTheme } from "../style";

export const Button = styled.button`
    border: 2px solid ${MainTheme.emphasis};
    width: 160px;
    height: 30px;
    background: transparent;
    color: ${MainTheme.emphasis};
    font-weight: 800;
    transition: 0.3s ease;
    border-radius: 0.4rem;
    
    &:hover{
        background: ${MainTheme.emphasis};
        color: white;
        animation:  0.3s ease-in-out;
        
    }
    &:active {
        background: white;
        color: ${MainTheme.emphasis};

    }
`;
