"use client";
import { FetchVoteInfo } from "@/Services/Poll";
import PollOption from "./PollOption";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import SocketContext from "@/Context/socketContext";
import UserContext from "@/Context/userContext";
import { Share2Icon } from "lucide-react";
import { DialogCloseButton } from "../molecules/ShareDialog";
function PollStrucutre({ poll }) {
  const { socketObject } = useContext(SocketContext);
  const { userId } = useContext(UserContext);
  const [Poll, setPoll] = useState(poll);
  const [totalVotes, setTotalVotes] = useState(0);
  const [choosedOption, setChoosedOption] = useState(null);
  const [updateProgress, setProgressUpdate] = useState(0);
  useEffect(() => {
    socketObject?.on("poll_update", (data) => {
      if (data?.message?.Poll?._id == poll._id) {
        setPoll(data.message.Poll);
        const sum = data.message.Poll.votes.reduce(
          (accumlator, currentValue) => accumlator + currentValue
        );
        setTotalVotes(sum);
        setProgressUpdate((prev)=> prev + 1);
      }
    });
  }, [socketObject]);
  const { data: voteinfo } = useQuery({
    queryKey: [`voteinfo-${Poll._id}`],
    queryFn: () => FetchVoteInfo(poll._id, userId),
    retry : 5
  });
  useEffect(() => {
    if (voteinfo) {
      setChoosedOption(voteinfo?.vote);
    } else {
      setChoosedOption(null);
    }
  }, [voteinfo]);
  useEffect(() => {
    const sum = poll?.votes?.reduce(
      (accumlator, currentValue) => accumlator + currentValue
    );
    setTotalVotes(sum);
    setProgressUpdate((prev)=> prev + 1);
  }, []);
  return (
    <div className="flex flex-row">
      <div
        className="w-full border-gray-300 border-2 h-fit flex-col rounded-2xl px-3 py-3"
        style={{ backgroundColor: `${poll.colour}` }}
      >
        <h2 className="fond-bold text-2xl font-mono">
          {Poll.name.toUpperCase()}
        </h2>
        <p className="text-sm">{Poll.description}</p>
        {Poll.options?.map((options, index) => {
          return (
            <PollOption
              updateProgress={updateProgress}
              totalVotes={totalVotes}
              setTotalVotes={setTotalVotes}
              pollId={poll._id}
              choosedOption={choosedOption}
              option={Poll.options}
              voteinfo={voteinfo}
              votes={Poll.votes}
              index={index}
              key={options}
              setChoosedOption={setChoosedOption}
            />
          );
        })}
        <div className="flex flex-row justify-between">
          <p className="text-gray-600 text-xs">{`~${poll.author_name}`}</p>
          <p className="text-gray-500 text-xs">{poll.createdAt}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center ml-1">
        <div className="w-fit h-fit">
          <DialogCloseButton
            link={`https://live-voting-platform.vercel.app//service/poll/${poll.name}`}
          />
        </div>
      </div>
    </div>
  );
}
export default PollStrucutre;