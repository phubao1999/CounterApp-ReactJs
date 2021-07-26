import SendMSG from "./SendMSG/sendMSG";
import Chatlog from "./ChatLog/chatLog";

export default function PageSocket() {
    return (
        <div>
            <h1 className="ml-4">Socket Chat Demo</h1>
            <SendMSG />
            <Chatlog />
        </div>
    )
}