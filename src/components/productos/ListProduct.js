import TablePurchase from "../TablePurchase";
import {useState} from "react";
import FormProduct from "./FormProduct";

export default function ListProduct(){
    const [isOpen,setIsOpen]=useState(true)

    return(
        <section>
            <div className="flex flex-col p-12">
                <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <button
                        className="bg-azul text-white p-2 mt-4 ml-4 rounded-md hover:bg-orange-600 hover:text-azul transition ease-in duration-200"
                    >AGREGAR
                    </button>
                    <div className="p-4">
                        <div className="overflow-x-auto">
                            <TablePurchase/>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <FormProduct addFood={"aaa"} closeModal={"aa"}></FormProduct>}
        </section>
    )
}
