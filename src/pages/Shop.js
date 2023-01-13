import ProductCard from "../components/productos/ProductCard";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProducts, setToken} from "../services/PrivateServices";

export default function Shop(){
    let {gender}=useParams()
    const [products,setpProducts]=useState();

    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
        getProducts(gender).then(response=>{
            console.log(response.data)
            setpProducts(response.data)
        })
    },[gender])


    return(
        <div>
            <ProductCard products={products}></ProductCard>
        </div>
    )
}
