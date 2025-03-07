'use client'

import { createContext, useState } from "react";

const MenuContext = createContext(null);

export const MenuContextProvider = ({children})=>{
    const [level1, setLevel1] = useState("Polls")
    const [level2, setLevel2] = useState("Public Polls")
    return(
        <MenuContext.Provider value={{level1, level2, setLevel1, setLevel2}}>
            {children}
        </MenuContext.Provider>
    )
}
export default MenuContext;