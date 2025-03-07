'use client'

import { createContext, useEffect, useState } from "react"
import {io} from "socket.io-client"
 const SocketContext = createContext(null)
export const SocketContextProvider = ({children})=>{
    let socket;
    const [socketObject, setSocketObject] = useState(null)
    useEffect(()=>{
        socket = io("http://192.168.22.111:5000");
        // socket?.on("connect", ()=>{
        //     setSocketObject(socket)
        //     console.log("Connected to socket")
        // })
    },[])
    useEffect(()=>{
        socket && socket.on("connect", ()=>{
            setSocketObject(socket)
            console.log("Connected to socket")
        })
    },[socket])
    return(
        <SocketContext.Provider value={{socketObject}}>
            {children}
        </SocketContext.Provider>
    )
}
export default SocketContext;