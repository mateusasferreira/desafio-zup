import React from 'react'
import {Wrapper, TitleContainer, ImageContainer} from './styles'

function Hero() {
    return (
        <Wrapper>
            <TitleContainer>
                <h1>zup <span>trails</span></h1>    
            </TitleContainer>
            <ImageContainer>
                <img src="/images/hero-image.png" alt="" />
            </ImageContainer>
        </Wrapper>
    )
}

export default Hero
