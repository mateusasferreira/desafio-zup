import React from 'react'
import { useModal } from '../../contexts/modalContext'

import {Card} from './styles'

function TrailsCard({trail}) {
    
    const {openModal} = useModal()

    return (
        
        <Card>
            <img src={trail.image} aria-labelledby="trail-name" />
            <h2 id="trail-name">{trail.name}</h2>
            <p>{trail.description}</p>
            <button onClick={() => openModal(trail.name, trail.description, trail.id)}>detalhes</button>
        </Card>
    )
}

export default TrailsCard
