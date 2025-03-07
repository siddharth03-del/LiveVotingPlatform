'use client'

import axios_instance from "@/axios/axios"

export function Castvote(id, vote, socketObject, userId){
    try{
        const data = {
            "pollId" : id,
            'vote' : vote,
            "userId" : userId
        }
        socketObject.emit('cast_vote', data)
        console.log("vote has been casted")
    }catch(error){
        console.log(error)
    }
}

export function RemoveVote(id, vote, socketObject, userId){
    
    try{
        const data = {"pollId" : id, "vote" : vote, "userId" : userId};
        socketObject.emit('remove_vote', data);
        return
    }catch(error){
        console.log(error);
        return
    }
}

export async function FetchMyVotes(){
    try{
        const userId = localStorage.getItem('userId');
        const params = {"userId" : userId};
        const response = await axios_instance.get('/vote/myvotes', {params});
        return response.data.data;
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}