import FormLogin from "../components/auth/FormLogin";
import FormRegister from "../components/auth/FormRegister";
import {useState} from "react";
import ecommerce from "./../assets/ecommerce.jpg"

export default function Auth(){
    const [isLogin, setIsLogin]=useState(true);

    const handleIsLogin=()=>{
        setIsLogin(!isLogin);
    }

    return(
        <div className="h-screen flex">
            <div className="flex w-2/4 justify-around items-center">
                <img src={ecommerce} className="h-full w-full object-cover object-center lg:h-full lg:w-full" alt=""/>
            </div>
            <div className="flex w-3/4 justify-center items-center bg-white">
                { isLogin ?
                    <FormLogin handleIsLogin={handleIsLogin}/> :
                    <FormRegister handleIsLogin={handleIsLogin} isLogin={handleIsLogin}/>
                }
            </div>
        </div>)
}
