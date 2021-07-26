import { useEffect, useState } from "react";
import io from "socket.io-client";
import { environments } from "../../../env/enviroment";
import Chatlog from "./ChatLog/chatLog";
import SendMSG from "./SendMSG/sendMSG";

export interface chatInfo {
    name: string,
    message: string
}

export default function PageSocket() {
    const socketServer = environments.socketServer;
    const socket = io(socketServer);
    const [chat, setChat] = useState<chatInfo[]>([]);

    useEffect(() => {
        socket.on('message', (data: chatInfo) => {
            updateChatState(data);
        })
    })

    const changeChat = (data: { name: string, message: string }) => {
        const { name, message } = data;
        updateChatState(data);
        socket.emit("message", { name, message })
    }

    const updateChatState = (obj: chatInfo) => {
        setChat([...chat, {
            name: obj.name,
            message: obj.message
        }])
    }

    return (
        <div>
            <h1 className="ml-4">Socket Chat Demo</h1>
            <SendMSG emitSubmit={changeChat} />
            <Chatlog chat={chat} />
        </div>
    )
}