import TableSale from "./TableSale";
import {useEffect, useState} from "react";
import {getSales} from "../../services/PrivateServices";

export default function ListSale(){
    const [sales, setSales]=useState();

    useEffect(()=>{
        getSales().then(response=>{
            setSales(response.data)
            console.log(response.data)
        })
    },[])

    return(
        <section>
        <div className="flex flex-col p-12">
            <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <div className="p-4">
                    <div className="overflow-x-auto">
                        <TableSale sales={sales}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
