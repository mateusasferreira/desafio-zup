import React from 'react'
import {Wrapper, TitleContainer, ImageContainer} from './styles'

import heroImage from '../../images/heroImage.png'

function Hero() {
    return (
        <Wrapper>
            <TitleContainer>
                <h1 id="page-title">zup <span>trails</span></h1>    
            </TitleContainer>
            <ImageContainer>
                <img src={heroImage} aria-labelledby="page-title"/>
            </ImageContainer>
        </Wrapper>
    )
}

export default Hero
