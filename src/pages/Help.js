import Chat from "../components/help/Chat";
import {useEffect, useState} from "react";
import {BsMenuUp} from"react-icons/bs";
import imageQuestion from "../assets/questionImage.jpg"
import AccordionItem from "../components/help/AccordionItem";


export default function Help(){
    const [chatting, setChatting]=useState(false);
    const [open, setOpen]=useState(false);


    const toggle=(index)=>{
        if (open===index){
            return setOpen(null)
        }
        setOpen(index)
    }

    const questions=[{
        question: "que version es mejor para desarrolla",
        response: "v6.4 is our most exciting release yet with new data abstractions for reads, writes, and navigation hooks to easily keep your UI in sync with your data. The new feature overview will catch you up."
    },
        {
            question: "que version es mejor para desarrollar",
            response: "v6.4 is our most exciting release yet with new data abstractions for reads, writes, and navigation hooks to easily keep your UI in sync with your data. The new feature overview will catch you up."
        },
        {
            question: "que version es mejor para desarrollar",
            response: "v6.4 is our most exciting release yet with new data abstractions for reads, writes, and navigation hooks to easily keep your UI in sync with your data. The new feature overview will catch you up."
        }
        ]
    const handleChangeChat=()=>{
        setChatting(!chatting)
    }

    return(
        <div>
            <div className="h-auto absolute">
                <div className="flex w-full h-1/2">
                    <div className="flex w-1/2 justify-center">
                        <div className="w-auto p-16" >
                            <h1 className='text-3xl pb-6 font-semibold font-titan'>
                                Estamos aqui para que
                                tu experiencia sea la
                                mejor
                            </h1>
                            <p className="">
                                si tienes alguna duda sobre nuestros productos o la pagina  revisa la seccion de preguntas frecuentes quiza encuentres una solucion a tus dudas si no es asi escribe al chat de servicio al cliente
                            </p>
                        </div>
                    </div>
                    <div className="flex w-1/2 justify-center">
                        <img className="w-1/2" src={imageQuestion} alt=""/>
                    </div>
                </div>
                <div className='py-16'>
                    <h1 className="text-3xl text-center font-semibold font-titan" >Preguntas frecuentes</h1>
                    <section className="grid place-items-center sm:px-1 lg:px-36">
                        <div>
                            {questions.map((value, index)=>{
                                return(<AccordionItem key={index}
                                                      open={index === open}
                                                      question={value.question}
                                                      response={value.response}
                                                      toggle={()=>toggle(index)}
                                />)
                            })}
                        </div>
                    </section>
                </div>
            </div>
            <div className='fixed w-full'>
                <button onClick={()=>handleChangeChat()} className='fixed bottom-0 left-0 bg-green-500 m-4 w-12 h-12 rounded-full'>
                    <BsMenuUp className="m-auto text-white text-lg font-bold" ></BsMenuUp>
                </button>
                {chatting && <Chat></Chat>}
            </div>
        </div>
    )
}
