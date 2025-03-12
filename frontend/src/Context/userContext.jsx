'use client'

import { createContext, useEffect, useState } from "react"

const UserContext = createContext(null)

export const UserContextProvidere = ({children})=>{
    const [userId, setUserId] = useState(null)
    useEffect(()=>{
        const storeId = localStorage.getItem('userId')
        setUserId(storeId)
    })
    return(
        <UserContext.Provider value={{userId, setUserId}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;