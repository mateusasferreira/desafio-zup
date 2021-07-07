import React from 'react'
import {Wrapper} from './styles'


function AppHeader() {
    return (
        <Wrapper>
            <span>inscrições: 0 </span>
            <img src={"/images/user-icon.png"} alt="" />
        </Wrapper>
    )
}

export default AppHeader
