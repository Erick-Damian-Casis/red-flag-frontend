import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import Pusher from "pusher-js";
import axios from "axios";

export default function Chat(){
    const {register, handleSubmit}=useForm();
    const [messages, setMessages]=useState([]);
    let allMessages = [];

    useEffect(()=>{
        Pusher.logToConsole = true;
        const pusher = new Pusher('2f4231fddb5780bc5c2a', {
            cluster: 'us2'
        });

        const channel = pusher.subscribe('chat');
        channel.bind('message', function(data) {
            allMessages.push(data)
            setMessages(allMessages)
        });
    },[])

    const onSubmit= async (data)=>{
        console.log(data)
        await axios.post('http://127.0.0.1:8000/api/v1/private/messages', data)
    }

//        <div className="bg-white flex-1 p:2 sm:p-6 justify-between flex flex-col w-1/2 rounded-md shadow-xl">
return(
        <div className="absolute top-0 left-16 bg-white p:2 sm:p-6 w-1/2 rounded-md shadow-xl">
            <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                <div className="relative flex items-center space-x-4">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                            alt="" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"/>
                    </div>
                    <div className="flex flex-col leading-tight">
                        <div className="text-2xl mt-1 flex items-center">
                            <span className="text-gray-700 mr-3">Anderson Vanhron</span>
                        </div>
                        <span className="text-lg text-gray-600">Cliente</span>
                    </div>
                </div>
            </div>
            <div id="messages"
                 className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                {/* Envio */}

                {/* receptor */}
                <div className="chat-message">
                    <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                            <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I get the same error on Arch Linux (also with sudo)</span>
                            </div>
                            <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I also have this issue, Here is what I was doing until now: #1076</span>
                            </div>
                            <div><span
                                className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">even i am facing</span>
                            </div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                            alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                    </div>
                </div>
                {messages.map((value, index)=>{
                    return(
                        <div key={index} className="chat-message">
                            <div className="flex items-end justify-end">
                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                    <div><span
                                        className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">{value.message}</span>
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                    alt="My profile" className="w-6 h-6 rounded-full order-2"/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Input de chat */}
                    <div className="relative flex">
                        {/* Input de chat */}
                        <input type="text" placeholder="Write your message!"
                               className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3"
                               {...register('message',{
                                   required: true
                               })}
                        />
                        <button type="submit"
                                className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                            <span className="font-bold">Send</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="h-6 w-6 ml-2 transform rotate-90">
                                <path
                                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
);
}