import ProductCard from "../components/productos/ProductCard";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {createCar, getProducts, setToken} from "../services/PrivateServices";
import FormCar from "../components/car/FormCar";
import {useForm} from "react-hook-form";

export default function Shop(){
    let {gender}=useParams()
    const [products,setProducts]=useState([]);
    const [carId,setCarId]=useState(null);
    const [isOpen,setIsOpen]=useState(false);


    const handleFormModal=(carId)=>{
        setIsOpen(!isOpen)
        setCarId(carId)
    }

    const handleFastBuy=(carId)=>{
        const productBuy = {
            product: carId,
            color: 6,
            amount: 1,
            size: 10,}
        createCar(productBuy).then(response=>{
            console.log(response)
        })
    }


    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        setToken(JSON.parse(loggedUser))
        getProducts(gender).then(response=>{
            setProducts(response.data)
        })
    },[gender])


    return(
        <div>
            <ProductCard handleFastBuy={handleFastBuy} products={products} handleFormModal={handleFormModal}></ProductCard>
            {isOpen && <FormCar carId={carId} closeModal={handleFormModal}/>}
        </div>
    )
}
