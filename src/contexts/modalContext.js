import { createContext, useContext, useState } from "react";

import api from "../api";

export const modalContext = createContext({})


export function ModalContextProvider({children}){
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalTrail, setModalTrail] = useState(null)
  
  //variavel que vai guardar qual foi o ultimo elemento com foco antes do modal abrir 
  const [lastFocusedElement, setLastFocusedElement] = useState(null)

  const openModal = async (trailName, trailDescription, trailId) => {
    setModalIsOpen(true)

    const trailCourses = await api.getTrailCourses(trailId)
    setModalTrail({name: trailName, description: trailDescription, id: trailId, courses: trailCourses})
    
    setLastFocusedElement(document.activeElement)
  
  }

  const closeModal = () => {
    setModalIsOpen(false)
    
    //volta o foco para o ultimo elemento focado antes do modal abrir
    lastFocusedElement.focus()
  }


  return (
    <modalContext.Provider value={{
      modalIsOpen,
      openModal,
      closeModal,
      modalTrail
    }}>
      {children}        
    </modalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(modalContext)
}