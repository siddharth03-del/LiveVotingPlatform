"use client";

import { FetchMyPolls } from "@/Services/Poll";
import { useQuery } from "@tanstack/react-query";
import PollStrucutre from "@/components/atoms/pollStructure";
import { Share2Icon } from "lucide-react";
import { DialogCloseButton } from "@/components/molecules/ShareDialog";
import SkeletonCard from "@/components/molecules/Skeleton";
export default function ClientComponent() {
  const {data : polls, isLoading, isError} = useQuery({
    queryKey : ["mypolls"],
    queryFn : FetchMyPolls,
    retry : 5,
    retryDelay : 1000*10
  })
  if (isError) return <div>Error loading data...</div>
  return (
    <div>
      {polls?.map((poll, index) => {
        return (
          <div key={[poll, index]} className="mt-5">
            <div className="w-[90%]">
              <PollStrucutre poll={poll} />
            </div>
          </div>
        );
      })}
      {
        polls?.length == 0 && <div>
          <h1 className="text-center text-3xl mt-5">No Polls Found</h1>
        </div>
      }
      {
        isLoading && <div>
          <SkeletonCard/>
        </div>
      }
    </div>
  );
}
