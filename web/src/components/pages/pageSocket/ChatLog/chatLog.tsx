import "./chatLog.scss";

export default function ChatLog() {
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
            </div>
        </section>
    )
}