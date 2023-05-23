import React, {Component} from 'react';
import chat  from '../images/chat.svg'

class Chat extends Component {
    render() {
        return (
            <div className="flex position-fixed position-static justify-end ">
                <div>
                    <img src={chat} width={50} height={50} alt={"chat"}>
                </img>
                </div>
            </div>
        );
    }
}

export default Chat;