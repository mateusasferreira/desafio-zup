import React from 'react'
import { useSubscription } from '../../contexts/subscriptionsContext'
import {Wrapper} from './styles'


function AppHeader() {

    const {subscriptions} =  useSubscription()

    return (
        <Wrapper>
            <span>inscrições: {subscriptions.length} </span>
            <img src={"/images/user-icon.png"} alt="" />
        </Wrapper>
    )
}

export default AppHeader
