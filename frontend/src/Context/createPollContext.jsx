'use client'

import { CreatePoll } from "@/Services/Poll";
import { createContext, useContext, useState, useTransition } from "react"
import { toast } from "sonner";
import UserContext from "./userContext";
import { useRouter } from "next/navigation";
const createPollContext = createContext(null)

export function CreatePollContextProvider({children}){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [authorname, setAuthorname] = useState('');
    const [email, setEmail] = useState('');
    const [options, setOptions] = useState(['',''])
    const [color, setColor] = useState('#87cefa')
    const [loading, setLoading] = useState(false)
    const {userId} = useContext(UserContext);
    const [publicPoll, setPublicPoll] = useState(true);
    const router = useRouter()
    async function SubmitCreatePoll(e){
        e.preventDefault();
        const newOptions = options.filter((option)=>option.trim() !== '')
        if(newOptions.length < 2){
            toast("Poll format error",{
                description : "Please add at least two options"
            }
            )
            return;
        }
        try{
            setLoading(true)
            const data = {"public" : Number(publicPoll), name, description, options : newOptions , "colour" : color, "author_name" : authorname, "emailId" : email, "userId" : localStorage.getItem('userId')}
            const response = await CreatePoll(data)
            toast("Poll created", {
                description : "The poll was successfully created"
            })
            setLoading(false);
            setName('');
            setDescription('');
            setAuthorname('');
            setEmail('');
            setOptions(['',''])
            setColor('#87cefa')
            setPublicPoll(true);
            router.push('mypolls')
        }catch(error){
            console.log(error);
            toast("Error", {
                description : "There was an error creating the poll please try again later"
            })
        }
        return;
    }
    return(
        <createPollContext.Provider value={{publicPoll, setPublicPoll ,loading, SubmitCreatePoll ,color, setColor, options, setOptions ,name, setName, description, setDescription, authorname, setAuthorname, email, setEmail}}>
            {children}
        </createPollContext.Provider>
    )
}
export default createPollContext;