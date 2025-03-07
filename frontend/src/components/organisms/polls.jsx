'use client'
import { FetchPolls } from "@/Services/Poll"
import { useQuery } from "@tanstack/react-query"
import PollStrucutre from "../atoms/pollStructure"
import { Skeleton } from "../ui/skeleton"
import SkeletonCard from "../molecules/Skeleton"
function Polls(){
    const {data, isLoading } = useQuery({
        queryKey : ['fetchPolls'],
        queryFn : FetchPolls,
        retry : 3,
        staleTime : 1000*5*60,
        retryDelay : 1000
    })
    return(
        <div>
            {
                data?.map((poll, index)=>{
                    return(
                        <div key={[poll, index]} className="mt-5">
                            <PollStrucutre poll={poll}/>
                        </div>
                    )
                })
            }
            {
                isLoading && <div>
                    <SkeletonCard/>
                </div>
            }
        </div>
    )
}
export default Polls;