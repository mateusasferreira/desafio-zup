import React from 'react'
import { useModal } from '../../contexts/modalContext'
import { useSubscription } from '../../contexts/subscriptionsContext'
import {Wrapper} from './styles'

import userIcon from '../../images/userIcon.png' 

function AppHeader() {

    const {subscriptions} =  useSubscription()

    const {modalIsOpen} = useModal()

    return (
        <Wrapper data-testid="header">
            <span>inscrições: {subscriptions.length} </span>
            <a title="opções do usuário" tabIndex={modalIsOpen ? "-1" : "0"}><img src={userIcon} alt="opções do usuário"/></a>
        </Wrapper>
    )
}

export default AppHeader
