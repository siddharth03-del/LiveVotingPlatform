import axios_instance from "@/axios/axios";

export async function fetchUserId(){
    try{
        let uuid = localStorage.getItem('userId');
        if(!uuid){
            const response = await axios_instance.get('/user/uuid')
            localStorage.setItem('userId', response.data.userId);
            uuid = response.data.userId;
        }
        return uuid;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function PostFeedback(object){
    try{
        let body = object;
        const response = await axios_instance.post('/user/feedback', body);
        return response.data.message;
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}