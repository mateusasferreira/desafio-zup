import { createContext, useState, useContext } from "react";


const subsContext = createContext({})



export function SubsContextProvider({children}){
    const [subscriptions, setSubscriptions] = useState([])

    const subscribeToTrail = (trailId) => {
        if (subscriptions.includes(trailId)) return

        setSubscriptions([...subscriptions, trailId])
    }

    return (
        <subsContext.Provider value={{
            subscriptions,
            subscribeToTrail
        }}>
            {children}
        </subsContext.Provider>
    )
}

export const useSubscription = () => {
    return useContext(subsContext)
}