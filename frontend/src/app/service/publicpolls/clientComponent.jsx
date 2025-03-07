'use client'

import UserContext from "@/Context/userContext"
import { fetchUserId } from "@/Services/user"
import dynamic from "next/dynamic"
import { useEffect } from "react"
import { useContext } from "react"
const Poll = dynamic(()=> import("@/components/organisms/polls"),{ssr : false})
export default function ClientComponent(){
    const {setUserId} = useContext(UserContext)
    useEffect(()=>{
        async function FetchUserIdHelper(){
            const uuid = await fetchUserId();
            setUserId(uuid);
        }
        FetchUserIdHelper()
    },[])
    return(
        <div className="w-[90%]">
            <Poll/>
        </div>
    )
}
