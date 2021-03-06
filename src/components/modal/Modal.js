import React, { useEffect } from 'react'
import { useModal } from '../../contexts/modalContext'
import { useSubscription } from '../../contexts/subscriptionsContext'

import {Wrapper, OverlayBg} from './styles'

function Modal() {

    const {modalIsOpen, modalTrail, closeModal} = useModal()

    const {subscriptions, subscribeToTrail} = useSubscription()

        const closeWithEsc = (e)=>{
        if(e.key === 'Escape' && modalIsOpen) closeModal()
    }
    
    useEffect(()=> {
        document.addEventListener('keydown', closeWithEsc)
        return () => document.removeEventListener('keydown', closeWithEsc)
    }, [closeWithEsc])
    
    if(!modalIsOpen || !modalTrail) return null

    return (
        <>
            <OverlayBg onClick={closeModal}/>
            <Wrapper
                role="dialog"
                aria-modal={modalIsOpen}
                aria-labelledby="modal-title"
                data-testid="modal"            
            >
                <h1 id="modal-title" >{modalTrail.name}</h1>
                <p>{modalTrail.description}</p>
                <button 
                title="confirmar inscrição na trilha ou apertar esc para continuar vendo trilhas" 
                tabIndex="0" 
                onClick={()=> {
                    closeModal()
                    subscribeToTrail(modalTrail.id)
                }}
                disabled={subscriptions.includes(modalTrail.id)} 
                >
                    inscrever-se</button>
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
