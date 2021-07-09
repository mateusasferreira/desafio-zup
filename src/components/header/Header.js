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
            <a tabIndex={modalIsOpen ? '-1' : '0'} title="opções do usuário"><img src={userIcon} alt="opções do usuário"/></a>
        </Wrapper>
    )
}

export default AppHeader
