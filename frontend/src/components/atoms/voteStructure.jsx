'use client'

import { CheckCircle2Icon } from "lucide-react";
function VoteStructure({vote}){
    return(
        <div className="border-2 rounded-xl py-2 px-2 mt-2 lg:w-4/6">
            <div className="text-xl">
                {vote.poll_name}
            </div>
            <div className="flex flex-row">
                <h1 className="text-md px-2">
                    {vote.vote}
                </h1>
                <CheckCircle2Icon color="green"/>
            </div>
        </div>
    )
}
export default VoteStructure;