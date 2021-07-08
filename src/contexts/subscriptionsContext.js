import { createContext, useState, useContext } from "react";


const subsContext = createContext({})



export function SubsContextProvider({children}){
    const [subscriptions, setSubscriptions] = useState([])

    const subscribeToTrail = (trail) => {
        if (subscriptions.includes(trail)) return

        setSubscriptions([...subscriptions, trail])

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