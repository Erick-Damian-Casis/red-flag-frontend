import CarList from "../components/car/CarList";
import {useEffect, useState} from "react";
import {destroyCar, getCars} from "../services/PrivateServices";
import FormSale from "../components/sale/FormSale";

export default function Car(){
    const [cars, setCars] = useState([])

    useEffect(()=>{
        getCars().then(response=>{
            setCars(response.data)
        })

    },[])

    const deleteCar=(carId)=>{
        destroyCar(carId).then(response=>{
            setCars(cars.filter(value => value.id !== carId))
            console.log(response.data)
        })
    }

    return(
        <div className='flex w-full'>
            <div className='w-2/3'>
                {cars?.map(value => {
                        return(<CarList key={value.id} car={value} deleteCar={deleteCar}/>)
                    }
                )}
            </div>
            <div className="w-1/3 h-screen ml-10 max-w-7xl shadow-lg rounded-sm border border-gray-200">
                <FormSale cars={cars}/>
            </div>
        </div>
    )
}
