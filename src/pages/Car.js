import CarList from "../components/car/CarList";
import {useEffect, useState} from "react";
import {destroyCar, getCars} from "../services/PrivateServices";

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
        <div className='flex flex-col justify-center'>
            {cars?.map(value => {
                return(<CarList key={value.id} car={value} deleteCar={deleteCar}/>)
                }
            )}

        </div>
    )
}
