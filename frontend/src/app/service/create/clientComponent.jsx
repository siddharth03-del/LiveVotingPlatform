"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CreatePollOptions from "@/components/molecules/createPollOptions";
import { useContext, useEffect, useState } from "react";
import createPollContext from "@/Context/createPollContext";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import MenuContext from "@/Context/menuContext";
import { useEffect } from "react";
import UserContext from "@/Context/userContext";
import { fetchUserId } from "@/Services/user";
export default function ClientComponent() {
  const {
    color,
    setColor,
    name,
    setName,
    description,
    setDescription,
    authorname,
    setAuthorname,
    email,
    setEmail,
    loading,
    SubmitCreatePoll,
    publicPoll,
    setPublicPoll
  } = useContext(createPollContext);
  const {setLevel1, setLevel2} = useContext(MenuContext);
  const {setUserId} = useContext(UserContext)
  useEffect(()=>{
    setLevel1("Poll");
    setLevel2("Create a poll");
  },[])
  useEffect(()=>{
          async function FetchUserIdHelper(){
              const uuid = await fetchUserId();
              setUserId(uuid);
          }
          FetchUserIdHelper()
      },[])
  return (
    <>
    <form
      onSubmit={(e) => {
        SubmitCreatePoll(e);
      }}
    >
      <div className="w-10/12 h-fit px-2 py-2 rounded-2xl"> 
      <h1 className="text-xl md:text-3xl font-bold text-blue-600">Create a New Poll</h1>
      <p className="text-gray-600 md:text-lg mt-1 mb-8">Engage your audience by creating a public or private poll.</p>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
          
          <Label htmlFor="name" className="font-bold">Poll Question</Label>
          <Input
            type="name"
            id="name"
            placeholder="Enter the poll question"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
          <Label htmlFor="description" className="font-bold">Description</Label>
          <Input
            type="description"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
          <Label htmlFor="author-name" className="font-bold">Author Name</Label>
          <Input
            type="name"
            id="author-name"
            placeholder="eg. Siddharth Singh"
            value={authorname}
            onChange={(e) => {
              setAuthorname(e.target.value);
            }}
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
          <Label htmlFor="email" className="font-bold">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <p className="text-xs text-red-500 font-bold mt-2">Public Polls are listed on the homepage for anyone to vote</p>
        <div className="flex items-center space-x-2 mt-2">
          <Switch id="public-poll" checked={publicPoll} onCheckedChange={()=>{setPublicPoll(!publicPoll)}}/>
          <Label htmlFor="public-poll" className="font-bold">Public Poll</Label>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
          <Label type="color" id="email" placeholder="white" className="font-bold">
            Color
          </Label>
          <Input
            type="color"
            id="color"
            placeholder="#87cefa"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
        <div>
          <p className="text-sm font-bold text-red-500 mt-2">
            As you type more options will appear
          </p>
          <CreatePollOptions />
        </div>
        <div className="mt-2">
          {loading ? (
            <Button disabled>
              <Loader2 className="animate-spin" />
              Create Poll
            </Button>
          ) : (
            <Button type="submit" className="bg-blue-600 w-full md:w-1/2 hover:bg-blue-700">Create Poll</Button>
          )}
        </div>
      </div>
    </form>
    </>
  );
}
