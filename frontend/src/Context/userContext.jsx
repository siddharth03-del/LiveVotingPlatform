import { createContext, useState } from "react"

const UserContext = createContext(null)

export const UserContextProvidere = ({children})=>{
    const [userId, setUserId] = useState(null)
    return(
        <UserContext.Provider value={{userId, setUserId}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;