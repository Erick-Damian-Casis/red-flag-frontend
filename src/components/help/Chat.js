import {useEffect, useState} from "react";
import Pusher from "pusher-js";
import {createMessage} from "../../services/PrivateServices";
import {useForm} from "react-hook-form";

export default function Chat(){
    const [messages, setMessages]=useState([]);
    const {register, handleSubmit}=useForm();

    useEffect(()=>{
        let allMessages = [];
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

    const onSubmit = async (data)=>{
        const messageCreate = await createMessage(data)
        console.log(messageCreate)
    }

return(
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
            <div className="relative flex items-center space-x-4">
                <div className="flex flex-col leading-tight">
                    <div className="text-2xl mt-1 flex items-center pr-4">
                        <span className="text-gray-700 mr-3">Live Chat</span>
                    </div>
                    <span className="absolute text-green-500 right-0 bottom-0">
                       <svg width="20" height="20">
                          <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                       </svg>
                    </span>
                </div>
            </div>
        </div>
        <div id="messages"
             className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            {messages.map((value, index)=>{
                return(
                    <div key={index} className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                <div className='flex flex-col'>
                                    <span className='px-2 text-gray-500'>{value.user}</span>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{value.message}</span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative flex">
                    <input type="text" placeholder="Write your message!"
                           className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                           {...register('message')}
                    />
                    <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                        <button type="submit"
                                className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                            <span className="font-bold">Enviar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="h-6 w-6 ml-2 transform rotate-90">
                                <path
                                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
);
}
