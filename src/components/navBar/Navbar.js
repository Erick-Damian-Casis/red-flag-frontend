import {useNavigate} from "react-router-dom";
import OptionProfile from "./OptionProfile";
import {useEffect, useState} from "react";
import NavBarUser from "./NavBarUser";
import NavbarAdmin from "./NavbarAdmin";
import {logout} from "../../services/PrivateServices";

export default function Navbar({userLogout}){
    const [role, setRole]=useState('user');

    useEffect(()=>{
            const loggedUser = window.localStorage?.getItem('roleUser')
            setRole(JSON.parse(loggedUser))
    },[])

    const navigate = useNavigate()

    const handleLogout=()=>{

        logout().then(response=>{
            window.localStorage.removeItem('loggedUser')
            navigate('/auth')
            userLogout()
        })
    }

    const [optionProfile, setOptionProfile]=useState(false)

    const openOption=()=>{
        setOptionProfile(!optionProfile)
    }

    return(
        <nav>
            {
                role ==="user"
                    ?<NavBarUser openOption={openOption}/>
                    : <NavbarAdmin handleLogout={handleLogout}/>
            }
            {optionProfile && <OptionProfile handleLogout={handleLogout} openOption={openOption} />}
        </nav>
    )
}
