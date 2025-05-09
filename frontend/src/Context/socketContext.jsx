'use client'

import { createContext, useEffect, useState } from "react"
import {io} from "socket.io-client"
import { renderUrl } from "@/axios/axios"
 const SocketContext = createContext(null)
export const SocketContextProvider = ({children})=>{
    let socket;
    const [socketObject, setSocketObject] = useState(null)
    useEffect(()=>{
        socket = io("https://livevotingplatform.onrender.com/");
        // socket?.on("connect", ()=>{
        //     setSocketObject(socket)
        //     console.log("Connected to socket")
        // })
    },[])
    useEffect(()=>{
        socket && socket.on("connect", ()=>{
            setSocketObject(socket)
        })
    },[socket])
    return(
        <SocketContext.Provider value={{socketObject}}>
            {children}
        </SocketContext.Provider>
    )
}
export default SocketContext;