import axios_instance from "@/axios/axios";
import UserContext from "@/Context/userContext";
import { useContext } from "react";

export async function fetchUserId(){
    try{
        let uuid = localStorage.getItem('userId');
        console.log(uuid)
        if(!uuid){
            const response = await axios_instance.get('/user/uuid')
            console.log(response.data)
            localStorage.setItem('userId', response.data.userId);
            uuid = response.data.userId;
        }
        return uuid;
    }catch(error){
        console.log(error)
        return null;
    }
}