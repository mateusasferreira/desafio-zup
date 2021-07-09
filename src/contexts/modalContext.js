import { createContext, useContext, useState } from "react";

import api from "../api";

const modalContext = createContext({})


export function ModalContextProvider({children}){
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalTrail, setModalTrail] = useState(null)

  const openModal = async (trailName, trailDescription, trailId) => {
    setModalIsOpen(true)

    const trailCourses = await api.getTrailCourses(trailId)
    setModalTrail({name: trailName, description: trailDescription, id: trailId, courses: trailCourses})
  }

  const closeModal = () => setModalIsOpen(false)


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