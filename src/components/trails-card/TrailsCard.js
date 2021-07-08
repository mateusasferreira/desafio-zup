import React from 'react'

import {Card} from './styles'

function TrailsCard({trail}) {
    

    return (
        
        <Card>
            <img src={trail.image} aria-labelledby="trail-name" />
            <h2 id="trail-name">{trail.name}</h2>
            <p>{trail.description}</p>
            <button>detalhes</button>
        </Card>
    )
}

export default TrailsCard
