import axios_instance from "@/axios/axios";

export async function FetchPolls(){
    try{
        const response = await axios_instance.get('/poll/all')
        return response.data.data.reverse();
    }catch(error){
        console.log(error)
        throw new Error(error)
    }
}

export async function FetchVoteInfo(pollId, userId){
    try{
        if(!userId){
            userId = localStorage.getItem('userId');
        }
        const params = {"user_id" : userId, "poll_id" : pollId};
        const response = await axios_instance.get('/poll/voteinfo', {params});
        return response.data.data;
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

export async function CreatePoll(data){
    try{
        const body = data;
        const response = await axios_instance.post('/poll/create', body)
        return response.data.message;
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

export async function FetchMyPolls(){
    try{
        const userId = localStorage.getItem('userId');
        const params = {"userId" : userId};
        const response = await axios_instance.get('/poll/mypolls', {params});
        return response.data.data.reverse();
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

export async function FetchOnePoll(pollname){
    try{
        const params = {"poll_name" : pollname};
        const response = await axios_instance.get('/poll/getone', {params});
        return response.data.data;
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}