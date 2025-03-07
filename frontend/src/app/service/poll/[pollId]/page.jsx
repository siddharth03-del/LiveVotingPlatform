"use client";

import { FetchOnePoll } from "@/Services/Poll";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import PollStrucutre from "@/components/atoms/pollStructure";
export default function Page({params}) {
    const [pollid, setPollId] = useState(null);
    useEffect(()=>{
        async function fetchParams(){
            const {pollId} = await params
            setPollId(pollId);
        }
        fetchParams()
    },[params])
    const { data: poll,error, isLoading, isError } = useQuery({
        queryKey: [pollid], // Use slug directly
        queryFn: () => FetchOnePoll(pollid)
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    return (
        <div className="w-[90%]">
            {
                (!isError && !isLoading) && <PollStrucutre poll={poll}/>
            }
        </div>
    );
}
