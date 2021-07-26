import { chatInfo } from "../pageSocket";
import { makeId } from "../../../../utils/utils";
import "./chatLog.scss";

interface propsType {
    chat: chatInfo[],
    userId: string
}

export default function ChatLog(props: propsType) {

    const getClassForChatItem = (chatId: string) => {
        if (chatId === props.userId) {
            return 'chat-item';
        }

        return 'chat-item chat-global';
    }

    return (
        <section className="chat-log m-4 p-3 custom-box-shadow">
            <header className="center-header">Chat Box {props.chat.length === 0 && `( ${props.chat.length} Message Available )`}</header>
            {props.chat.length > 0 &&
                <>
                    <div className="chat-view">
                        {props.chat.map((item: chatInfo) =>
                            <div key={makeId(5)} className={getClassForChatItem(item.userId)}>
                                <div className="user-info">
                                    {item.name}
                                </div>
                                <div className="user-msg ml-1">
                                    {item.message}
                                </div>
                            </div>
                        )}
                    </div>
                </>
            }
        </section>
    )
}