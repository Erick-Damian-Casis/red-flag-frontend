import axios from "axios";
const URL_PRODUCTS = 'http://127.0.0.1:8000/api/v1/private/products/';
const URL_CATALOGUES = 'http://127.0.0.1:8000/api/v1/private/catalogues';
const URL_CARS = 'http://127.0.0.1:8000/api/v1/private/cars/';
const URL_SALES = 'http://127.0.0.1:8000/api/v1/private/sales';
const URL_USERS = 'http://127.0.0.1:8000/api/v1/private/users/';



let token = null

export const setToken=(newToken)=>{
    token = `Bearer ${newToken}`
}

/*****************************************************************
***************         SERVICE PRODUCTS           *******************
******************************************************************/

export const getProduct =(id)=>{
    const request = axios(`${URL_PRODUCTS + id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const getProducts =()=>{
    const request = axios(`${URL_PRODUCTS}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const createProduct =(data)=>{
    const request = axios.post(`${URL_PRODUCTS}`, data,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const updateProduct =(id, food)=>{
    const request = axios.put(`${URL_PRODUCTS + id}`,food,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const destroyProduct =(id)=>{
    const request =  axios.delete(URL_PRODUCTS+ id,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

/*****************************************************************
 ***************         SERVICE CATALOGUES        *******************
 *****************************************************************/


export const getCatalogues =()=>{
    const request = axios(`${URL_CATALOGUES}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}
/*****************************************************************
 ***************         SERVICE CAR        *******************
 *****************************************************************/

export const getCar =(id)=>{
    const request = axios(`${URL_CARS + id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const getCars =()=>{
    const request = axios(`${URL_CARS}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const createCar =(data)=>{
    const request = axios.post(`${URL_CARS}`, data,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const updateCar =(id, food)=>{
    const request = axios.put(`${URL_CARS + id}`,food,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const destroyCar =(id)=>{
    const request =  axios.delete(URL_CARS+ id,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}
/*****************************************************************
 ***************         SERVICE SALE        *******************
 *****************************************************************/

export const getSale =(id)=>{
    const request = axios(`${URL_SALES + id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const getSales =()=>{
    const request = axios(`${URL_SALES}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const createSale =(data)=>{
    const request = axios.post(`${URL_SALES}`, data,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const updateSale =(id, food)=>{
    const request = axios.put(`${URL_SALES + id}`,food,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const destroySale =(id)=>{
    const request =  axios.delete(URL_SALES+ id,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

/*****************************************************************
 ***************         SERVICE USER        *******************
 *****************************************************************/

export const getUser =(id)=>{
    const request = axios(`${URL_USERS + id}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const getUsers =()=>{
    const request = axios(`${URL_USERS}`,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const updateUser =(id, food)=>{
    const request = axios.put(`${URL_USERS + id}`,food,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

export const destroyUser =(id)=>{
    const request =  axios.delete(URL_USERS+ id,{
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}

/*****************************************************************
 ***************         LOGOUT        *******************
 *****************************************************************/
export const logout = ()=>{
    const request = axios(`http://127.0.0.1:8000/api/v1/private/logout`, {
        headers:{
            Authorization: token
        }
    })
    return request.then(response=>response.data)
}
