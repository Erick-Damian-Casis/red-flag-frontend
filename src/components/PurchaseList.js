import TablePurchase from "./TablePurchase";

export default function PurchaseList(){


    return(
        <section>
            <div className="flex flex-col p-12">
                <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="p-4">
                        <div className="overflow-x-auto">
                            <TablePurchase/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
