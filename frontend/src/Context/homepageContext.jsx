'use client'

import { createContext } from "react"
import { useRouter } from "next/navigation"
const HomepageContext = createContext(null)

export function HomepageContextProvider({children}){
    const router = useRouter();
    function RedirectToCreatePage(){
        router.push('service/create');
    }

    function RedirecToPublicpolls(){
        router.push('service/publicpolls');
    }
    return(
        <HomepageContext.Provider value={{RedirecToPublicpolls, RedirectToCreatePage}}>
            {children}
        </HomepageContext.Provider>
    )
}
export default HomepageContext;