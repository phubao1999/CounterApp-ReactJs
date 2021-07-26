import { chatInfo } from "../pageSocket";
import { makeId } from "../../../../utils/utils";
import "./chatLog.scss";

interface propsType {
    chat: chatInfo[]
}

export default function ChatLog(props: propsType) {
    return (
        <section className="chat-log m-4 p-3 custom-box-shadow">
            <header className="center-header">Chat Box</header>
            <div className="chat-view">
                <div className="chat-item">
                    <div className="user-info">
                        user-local
                    </div>
                    <div className="user-msg ml-1">
                        Cupidatat commodo enim consequat sunt eiusmod officia aute enim.
                    </div>
                </div>
                <div className="chat-item chat-global">
                    <div className="user-info">
                        user-global
                    </div>
                    <div className="user-msg ml-1">
                        Cupidatat commodo enim consequat sunt eiusmod officia aute enim.
                    </div>
                </div>
                {props.chat.map((item: chatInfo) =>
                    <div key={makeId(5)} className="chat-item">
                        <div className="user-info">
                            {item.name}
                        </div>
                        <div className="user-msg ml-1">
                            {item.message}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}