import TablePurchase from "./TablePurchase";
import {useEffect, useState} from "react";
import {getSalesByUser} from "../services/PrivateServices";

export default function PurchaseList(){
    const [purchases, setPurchases]=useState([])

    useEffect(()=>{
        getSalesByUser().then(response=>{
            setPurchases(response.data)
        })
    },[])

    return(
            <div className="flex flex-col p-12">
                <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="p-4">
                        <div className="overflow-x-auto">
                            <TablePurchase purchases={purchases}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
