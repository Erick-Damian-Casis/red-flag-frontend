import {useNavigate} from "react-router-dom";
import OptionProfile from "./OptionProfile";
import {useEffect, useState} from "react";
import NavBarUser from "./NavBarUser";
import NavbarAdmin from "./NavbarAdmin";
import {logout} from "../../services/PrivateServices";

export default function Navbar({userLogout}){
    const [role, setRole]=useState('user');
    const [photo, setPhoto]=useState('https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg');

    useEffect(()=>{
            const loggedUser = window.localStorage?.getItem('roleUser')
            const photoUser = window.localStorage?.getItem('photoUser')
            const urlPhoto = JSON.parse(photoUser)
            setPhoto(`http://127.0.0.1:8000${urlPhoto}`)
            console.log(`http://127.0.0.1:8000${urlPhoto}`)
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
                    ?<NavBarUser openOption={openOption} photo={photo}/>
                    :<NavbarAdmin handleLogout={handleLogout}/>
            }
            {optionProfile && <OptionProfile handleLogout={handleLogout} openOption={openOption} />}
        </nav>
    )
}
