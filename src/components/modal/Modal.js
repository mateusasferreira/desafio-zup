import React from 'react'
import { useModal } from '../../contexts/modalContext'

import {Wrapper, OverlayBg} from './styles'

function Modal() {

    const {modalIsOpen, modalTrail} = useModal()

    if(!modalIsOpen || !modalTrail) return null

    return (
        <>
            <OverlayBg/>
            <Wrapper
            role="dialog"
            aria-modal={modalIsOpen}
            aria-labelledby="modal-title"
            >
                <h1 id="modal-title">{modalTrail.name}</h1>
                <p>{modalTrail.description}</p>
                <button>inscrever-se</button>
                <ul>
                    {modalTrail.courses.map(course => <li key={course.id}>
                        <span>{course.name}</span>
                        <span>{course.hours} horas</span>
                    </li>)}
                </ul>
            </Wrapper>
        </>
        
    )
}

export default Modal
