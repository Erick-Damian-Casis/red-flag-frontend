import {BsFillCartFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import OptionProfile from "./OptionProfile";
import {useState} from "react";

export default function Navbar(){
    const itemsNav= [{
        item: 'Inicio',
        path: '/home'
    },{
        item: 'Tienda',
        path: '/products'
    },{
        item: 'Ayuda',
        path: '/help'
    }];
    const [optionProfile, setOptionProfile]=useState(true)
    const openOption=()=>{
        setOptionProfile(!optionProfile)
    }

    return(
        <nav>
            {optionProfile && <OptionProfile openOption={openOption} />}
            <div>
                <ul className="flex py-2 px-16 bg-white justify-between items-center">

                    <li>
                        <Link to='home' className='font-titan text-3xl text-orange-500' >Red Flag</Link>
                    </li>
                    <ul className='w-28 h-full flex justify-between items-center'>
                        <li className='w-12'>
                            <Link to='cars'>
                                <BsFillCartFill className='text-2xl text-orange-500 hover:opacity-25'></BsFillCartFill>
                            </Link>
                        </li>
                        <li className='w-12' onClick={()=>openOption()}>
                                <img className="w-full h-full object-cover object-center rounded-full" src="http://127.0.0.1:8000/storage/photoProfiles/3ahDnf7IOKVBVAIult7JRQHKY6UiyZm1JkmEDZN2.jpg" alt=""/>
                        </li>
                    </ul>
                </ul>
            </div>
            <div>
                <ul className="flex py-4 px-16 bg-azul justify-between items-center">
                    {itemsNav.map(value=>{
                        return(
                                <li className="text-md text-orange-500 tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">
                                    <Link to={value.path}>
                                        {value.item}
                                    </Link>
                                </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
