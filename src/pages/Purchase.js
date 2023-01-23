import PurchaseList from "../components/PurchaseList";

export default function Purchase(){

    return(
        <div className="flex flex-col m-auto pt-8">
            <h1 className="text-3xl font-semibold text-center" >Historial de Compra</h1>
            <PurchaseList/>
        </div>
    )
}
