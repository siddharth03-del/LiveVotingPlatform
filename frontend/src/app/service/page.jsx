'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SkeletonCard from "@/components/molecules/Skeleton";
export default function Home(){
    const router = useRouter();
    useEffect(()=>{
        router.push('service/publicpolls')
    },[router]);
    return(
        <div className="text-red-600">
            <SkeletonCard/>
        </div>
    )
}