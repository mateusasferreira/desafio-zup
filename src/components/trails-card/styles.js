import styled from "styled-components";

export const Card = styled.article`
    height: 388px;

    width: 376px;

    position: relative;

    background-color: #FFFFFF;

    img {
        width: 100%;
        height: 122px;

        object-fit: cover;
    }

    h2 {
        margin: 18px 0 0 12px;

        font-family: ${props => props.theme.standardFont};
        font-weight: 400;
        font-size: 48px;
        line-height: 59px;
    }

    p {

        margin: 18px 0 0 12px;

        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;

        display: -webkit-box;
                -webkit-line-clamp: 3; /* number of lines to show */
                -webkit-box-orient: vertical;

        font-family: ${props => props.theme.standardFont};
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }

    button {
        width: 179px;
        height: 60px;

        position: absolute;
        bottom: 0;
        right: 0;

        margin-bottom: 9px;
        margin-right: 9px;

        border: none;
        border-radius: 20px;

        background-color: ${props => props.theme.highlightColor};

        color: ${props => props.theme.primaryColor};
        font-family: ${props => props.theme.standardFont};
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
    }

`