import {useState, useEffect} from 'react'

import {Wrapper} from './styles'

import TrailsCard from '../trails-card/TrailsCard'

function Trails() {
    const [trails, setTrails] = useState(null)
    
    useEffect(()=>{
        async function getTrails(){
            try {
                const res = await fetch(`https://60e2ee6f9103bd0017b47673.mockapi.io/api/v1/trails/`)
                const data = await res.json()

                setTrails(data)
            } catch(err) {
                console.error(err)
            }
        }
        getTrails()        
    }, [])


    return (
        <Wrapper>
            {trails && trails.map(trail => <TrailsCard trail={trail} key={trail.id}/>)}
            
        </Wrapper>
    )
}

export default Trails
