"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CreatePollOptions from "@/components/molecules/createPollOptions";
import { useContext, useEffect, useState } from "react";
import createPollContext from "@/Context/createPollContext";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";

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
  return (
    <>
    <form
      onSubmit={(e) => {
        SubmitCreatePoll(e);
      }}
    >
      <div className="w-10/12 h-fit px-2 py-2 border-2 border-gray-300 rounded-2xl">
        Create a Poll
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
          <Label htmlFor="name">Name</Label>
          <Input
            type="name"
            id="name"
            placeholder="Name of the Poll"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
          <Label htmlFor="description">Description</Label>
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
          <Label htmlFor="author-name">Author Name</Label>
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
          <Label htmlFor="email">Email</Label>
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
          <Label htmlFor="public-poll">Public Poll</Label>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
          <Label type="color" id="email" placeholder="white">
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
          <h1 className="text-sm font-bold text-red-500 mt-2">
            As you type more options will appear
          </h1>
          <CreatePollOptions />
        </div>
        <div className="mt-2">
          {loading ? (
            <Button disabled>
              <Loader2 className="animate-spin" />
              Create Poll
            </Button>
          ) : (
            <Button type="submit">Create Poll</Button>
          )}
        </div>
      </div>
    </form>
    </>
  );
}
