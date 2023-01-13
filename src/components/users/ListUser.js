import TableUser from "./TableUser";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/PrivateServices";

export default function ListUser(){

    const [users, setUsers] = useState();

    useEffect(()=>{
        getUsers().then(response=>{
            setUsers(response.data)
        })
    },[])

    return(
        <section>
            <div className="flex flex-col p-12">
                <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="p-4">
                        <div className="overflow-x-auto">
                            <TableUser users={users}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
