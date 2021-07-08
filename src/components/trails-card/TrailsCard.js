import React from 'react'
import { useModal } from '../../contexts/modalContext'
import { useSubscription } from '../../contexts/subscriptionsContext'

import {Card} from './styles'

function TrailsCard({trail}) {
    
    const {openModal} = useModal()

    const {subscriptions} = useSubscription()

    return (
        
        <Card>
            <img src={trail.image} aria-labelledby="trail-name" />
            <h2 id="trail-name">{trail.name}</h2>
            <p>{trail.description}</p>
            <button onClick={() => openModal(trail.name, trail.description, trail.id)} disabled={subscriptions.includes(trail.name)}>detalhes</button>
        </Card>
    )
}

export default TrailsCard
