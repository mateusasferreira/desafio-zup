import React from 'react'
import { useModal } from '../../contexts/modalContext'

import {Wrapper} from './styles'

function Modal() {

    const {modalIsOpen, modalTrail} = useModal()

    if(!modalIsOpen || !modalTrail) return null

    return (
        <Wrapper>
            <h1>{modalTrail.name}</h1>
            <p>{modalTrail.description}</p>
            {modalTrail.courses.map(course => <p>{course.name}</p>)}
        </Wrapper>
    )
}

export default Modal
