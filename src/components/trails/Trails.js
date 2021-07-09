import {useState, useEffect} from 'react'

import {Wrapper} from './styles'

import TrailsCard from '../trails-card/TrailsCard'

import api from '../../api/index'

function Trails() {
    const [trails, setTrails] = useState(null)
    
    async function getTrails(){
       setTrails( await api.getTrails())
    }

    useEffect(()=>{
        getTrails()        
    }, [])


    return (
        <Wrapper>
            {trails && trails.map(trail => <TrailsCard trail={trail} key={trail.id}/>)}
            
        </Wrapper>
    )
}

export default Trails
