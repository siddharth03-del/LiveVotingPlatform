import { Castvote, RemoveVote } from "@/Services/vote";
import { Checkbox } from "../ui/checkbox";
import { Progress } from "../ui/progress";
import { useEffect, useState, useContext } from "react";
import SocketContext from "@/Context/socketContext";
import UserContext from "@/Context/userContext";
function PollOption({
  option,
  votes,
  index,
  pollId,
  choosedOption,
  setChoosedOption,
  totalVotes,
  setTotalVotes,
  updateProgress
}) {
  const [checkValue, setCheckValue] = useState(false);
  const [progress, setProgress] = useState(0);
  const { socketObject } = useContext(SocketContext);
  const { userId } = useContext(UserContext);
  // useEffect(() => {
  //   if (checkValue) {
  //     votes[index]--;
  //     setTotalVotes(totalVotes - 1);
  //   }
  //   setCheckValue(choosedOption == option[index]);
  // }, [choosedOption]);
  useEffect(()=>{
    console.log("changing progress")
    let a = votes[index]/totalVotes;
    console.log(option[index], votes[index])
    setProgress(Math.round(a*100))
  },[totalVotes,updateProgress])
  useEffect(()=>{
    console.log("changing progress")
    let a = votes[index]/totalVotes;
    console.log(option[index], votes[index])
    setProgress(Math.round(a*100))
  },[updateProgress])
  // function HandleCheckedChange() {
  //   if (checkValue) {
  //     setCheckValue(false);
  //     setChoosedOption(null);
  //     votes[index]--;
  //     setTotalVotes(totalVotes - 1);
  //     RemoveVote(pollId, option[index], socketObject, userId);
  //   } else {
  //     setChoosedOption(option[index]);
  //     setTimeout(() => {
  //       setCheckValue(true);
  //     }, 500);
  //     votes[index]++;
  //     setTotalVotes(totalVotes + 1);
  //     Castvote(pollId, option[index], socketObject, userId);
  //   }
  // }

  function HandleCheckedChange(){
    if (choosedOption == option[index]){
      setChoosedOption(null);
      votes[index]--;
      setTotalVotes(totalVotes - 1);
      RemoveVote(pollId, option[index], socketObject, userId);
      setCheckValue(false);
    }else{
      if(choosedOption){
        let lastIndex = option.findIndex((element)=> element == choosedOption);
        votes[lastIndex]--;
      }
      setChoosedOption(option[index]);
      votes[index]++;
      setTotalVotes(totalVotes + 1);
      Castvote(pollId, option[index], socketObject, userId)
    }
  }
  return (
    <div className="flex flex-row py-1">
      <div className="mt-[2px]">
        <Checkbox
          onCheckedChange={() => {
            HandleCheckedChange();
          }}
          checked={choosedOption == option[index]}
        />
      </div>
      <div className="flex flex-col w-[80%] px-2">
        <div className="flex flex-row justify-between">
          <div className="font-bold">{option[index]}</div>
          <div className="pl-[2px] pr-4">{votes[index]}</div>
        </div>
        <div className="w-[100%] py-1">
          <Progress value={progress} className="w-[100%]" />
        </div>
      </div>
    </div>
  );
}
export default PollOption;
