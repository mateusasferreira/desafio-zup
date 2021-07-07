import styled from "styled-components"; 

export const Wrapper = styled.header`
    
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 12px 48px;

    span {
        font-family: ${props => props.theme.standardFont};
        font-size: 22px;
        line-height: 27px;
        color: #FFFFFF;
        margin-right: 25px;
        margin-left: auto;
    }

    img {
        width: 48px;
        height: 48px;
    }

`

