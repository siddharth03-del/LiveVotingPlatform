'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
function Page(){
    const router = useRouter()
    useEffect(()=>{
        router.push('/service/publicpolls')
    })
    return(
        <div>
            Redirecting you to homepage
        </div>
    )
}
export default Page;