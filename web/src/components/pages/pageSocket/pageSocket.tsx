import { useEffect, useState } from "react";
import io from "socket.io-client";
import { environments } from "../../../env/enviroment";
import { makeId } from "../../../utils/utils";
import Chatlog from "./ChatLog/chatLog";
import SendMSG from "./SendMSG/sendMSG";

export interface chatInfo {
    userId: string,
    name: string,
    message: string
}

export default function PageSocket() {
    const socketServer = environments.socketServer;
    const socket = io(socketServer);
    const [chat, setChat] = useState<chatInfo[]>([]);
    const [userIdRandom] = useState(makeId(5));

    useEffect(() => {
        socket.on('message', (data: chatInfo) => {
            setChat([...chat, {
                userId: data.userId,
                name: data.name,
                message: data.message
            }])
        })
    })

    const changeChat = (data: chatInfo) => {
        const { name, message, userId } = data;
        socket.emit("message", { name, message, userId })
    }

    return (
        <div>
            <h1 className="ml-4">Socket Chat Demo</h1>
            <SendMSG emitSubmit={changeChat} userId={userIdRandom} />
            <Chatlog chat={chat} userId={userIdRandom} />
        </div>
    )
}