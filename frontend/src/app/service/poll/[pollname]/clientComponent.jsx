"use client"

import { FetchOnePoll } from "@/Services/Poll";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from 'react';
import PollStrucutre from "@/components/atoms/pollStructure";
export default function ClientComponent({poll}) {
    // const { data: poll,error, isLoading, isError } = useQuery({
    //     queryKey: [pollName], // Use slug directly
    //     queryFn: () => FetchOnePoll(pollName)
    // });
    
    // if (isLoading) return <div>Loading...</div>;
    // if (isError) return <div>Error loading data</div>;
    return (
        <div className="w-[90%]">
            {
                <PollStrucutre poll={poll}/>
            }
        </div>
    );
}
