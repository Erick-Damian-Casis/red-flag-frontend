import Swal from "sweetalert2";

export const successRegister=()=>{
    return Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario Creado',
        showConfirmButton: false,
        timer: 1500
    })
}

export const successAddCar=()=>{
    return Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El producto a sido agregado a tu carrito',
        showConfirmButton: false,
        timer: 1500
    })
}

export const successSale=()=>{
    return Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu compra se a realizado, Gracias',
        showConfirmButton: false,
        timer: 1500
    })
}
