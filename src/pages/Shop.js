import ProductCard from "../components/productos/ProductCard";
import {useParams} from "react-router-dom";

export default function Shop(){
    let {gender}=useParams()


    return(
        <div>
            <p>{gender}</p>
            <ProductCard></ProductCard>
        </div>
    )
}
