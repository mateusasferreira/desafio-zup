import styled from "styled-components"

export const Wrapper = styled.section`
    max-width: 1240px;

    display: flex;

    margin: 0 auto;

`

export const TitleContainer = styled.div`
    width: 50%;

    h1 {
        color: #FFFFFF;
        font-family: ${props => props.theme.standardFont};
        font-weight: 700;
        font-size: 128px;
        text-transform: uppercase;

        position: relative;
        left: 60px;
        top: 100px;

        span {
            font-family: ${props => props.theme.altFont};
            font-size: 78px;
            line-height: 99px;
            text-transform: none;

            display: block;
            position: relative;
            left: 140px;
            top: -33px;
        }
    }


`

export const ImageContainer = styled.div`
    width: 50%;

    img {
        width: 606px;
        height: 429px;
    }

`