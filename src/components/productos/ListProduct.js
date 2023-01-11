import TablePurchase from "../TablePurchase";
import {useState} from "react";
import FormProduct from "./FormProduct";

export default function ListProduct(){
    const [isOpen,setIsOpen]=useState(false)

    const handleFormModal=()=>{
        setIsOpen(!isOpen)
    }

    return(
        <section>
            <div className="flex flex-col p-12">
                <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <button onClick={()=>handleFormModal()}
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
            {isOpen && <FormProduct addFood={"aaa"} closeModal={handleFormModal}></FormProduct>}
        </section>
    )
}
