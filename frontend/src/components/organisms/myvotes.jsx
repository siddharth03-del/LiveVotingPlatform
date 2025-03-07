'use client'

import { FetchMyVotes } from "@/Services/vote";
import { useQuery } from "@tanstack/react-query";
import VoteStructure from "../atoms/voteStructure";
import SkeletonCard from "../molecules/Skeleton";

function Myvotes(){
    const {data : votes, isLoading, isError} = useQuery({
        queryKey: ["myvotes"],
        queryFn : FetchMyVotes,
        staleTime : 1000*5,
        retry : 5,
        retryDelay : 5000
    })
    if(isError) return <div>Error fetchig data...</div>
    return(
        <div>
            {
                votes?.map((vote, index)=>{
                    return(
                        <div key={index}>
                            <VoteStructure vote={vote} />
                        </div>
                    )
                })
            }
            {
                isLoading && <div>
                    <SkeletonCard/>
                </div>
            }
            {
                votes?.length == 0 && 
                <div className="text-3xl">
                    <p>No votes found</p>
                </div>
            }
        </div>
    )
}
export default Myvotes;