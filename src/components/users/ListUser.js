import TablePurchase from "../TablePurchase";
import TableUser from "./TableUser";

export default function ListUser(){
    return(
        <section>
            <div className="flex flex-col p-12">
                <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="p-4">
                        <div className="overflow-x-auto">
                            <TableUser/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
