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
            <h1 className="text-2xl font-bold  text-blue-600">Public Polls</h1>
            <p className="text-gray-600 md:text-lg mt-1 mb-8">Vote, share your opinion, and engage with the community.</p>
            <Poll/>
        </div>
    )
}
