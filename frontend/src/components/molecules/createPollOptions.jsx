"use client";

import createPollContext from "@/Context/createPollContext";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useContext, useEffect } from "react";
export default function CreatePollOptions() {
  const { options, setOptions } = useContext(createPollContext);
  function HandleInputChange(value, index){

    setOptions((prevOptions) => {
        let newOptions = [...prevOptions];
        
        if(index === newOptions.length - 1){
            newOptions.push('');
        }
        
        newOptions = newOptions.map((opt, idx) => {
            if(idx === index){
                return value;
            } else {
                return opt;
            }
        });

        return newOptions;
    });
}

  useEffect(()=>{
  },[options])
  return (
    <div>
      {options?.map((option, index) => {
        return (
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-1" key={index}>
            <Label htmlFor="name">{`Option ${index + 1}`}</Label>
            <Input type="name" id="name" placeholder="Add+" value={option} onChange={(e)=>{HandleInputChange(e.target.value, index)}}/>
          </div>
        );
      })}
    </div>
  );
}
