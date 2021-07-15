import React from 'react'
import { useModal } from '../../contexts/modalContext'
import { useSubscription } from '../../contexts/subscriptionsContext'

import {Card} from './styles'

function TrailsCard({trail}) {
    
    const {openModal, modalIsOpen} = useModal()

    const {subscriptions} = useSubscription()

    return (
        
        <Card>
            <img src={trail.image} aria-labelledby="trail-name" />
            <h2 id="trail-name">{trail.name}</h2>
            <p>{trail.description}</p>
            <button     
                title={`ver detalhes da trilha ${trail.name}`}
                id="card-btn"
                onClick={() => openModal(trail.name, trail.description, trail.id)} 
                tabIndex={modalIsOpen ? "-1" : 0}
            >
                    detalhes
            </button>
        </Card>
    )
}

export default TrailsCard
