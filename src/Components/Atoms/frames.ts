import styled from "styled-components"
import { MainTheme } from "../style"
export const Frame = styled.div`
    display: flex;
    background: ${MainTheme.iconBg};
    border-radius: 1.5rem;
    width: 150px;
    height: 150px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 800;
    font-size: 18px;
    margin:1rem;
    color: white;
    transition: 0.3s ease;
    &:hover {
        width: 155px;
        height: 155px;
        background: white;
        color: ${MainTheme.emphasis};
        animation: 0.5s ease-in-out;

    }
`