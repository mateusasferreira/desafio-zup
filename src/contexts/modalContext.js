import { createContext, useContext, useState } from "react";


const modalContext = createContext({})


export function ModalContextProvider({children}){
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalTrail, setModalTrail] = useState(null)

  const openModal = async (trailName, trailDescription, trailId) => {
    setModalIsOpen(true)

    try {
      const res = await fetch(`https://60e2ee6f9103bd0017b47673.mockapi.io/api/v1/trails/${trailId}/trails-grade/${trailId}/courses/`)
      const trailCourses = await res.json()
      setModalTrail({name: trailName, description: trailDescription, id: trailId, courses: trailCourses})
      console.log(modalTrail)

    } catch(err) {
      console.error(err)
    }
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