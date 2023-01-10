import hombre from "../../assets/hombre.jpg";
import {useForm} from "react-hook-form";
import {registerUser} from "../../services/AuthService";

export default function UserForm(){
    const { register, handleSubmit, formState:{errors} }=useForm();

    const onSubmit=(data)=>{
        registerUser(data).then(response=>{
            console.log(response)
        })
    }

    return(
        <div className="w-full h-screen p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex h-24 w-24 overflow-hidden m-auto rounded-full">
                    <img className="w-full h-full object-cover object-left-top" src={hombre} alt=""/>
                </div>
                <div className="flex flex-col items-center overflow-hidden m-auto pt-16">
                            <div className="w-1/2 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
                                {errors.name?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                                <input
                                    {...register('name',{
                                        required: true
                                    })}
                                    type="text"
                                    placeholder="Nombre"
                                    className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                                />
                            </div>
                            <div className="mt-4 w-1/2 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
                                {errors.email?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                                <input
                                    {...register('email',{
                                        required: true
                                    })}
                                    type="text"
                                    placeholder="Correo Electronico"
                                    className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                                />
                            </div>
                            <div className="mt-4 w-1/2 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
                                {errors.address?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                                <input
                                    {...register('address',{
                                        required: true
                                    })}
                                    type="text"
                                    placeholder="Dirección"
                                    className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                                />

                            </div>
                            <div className="mt-4 w-1/2 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-red-500">
                                {errors.phone?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
                                <input
                                    {...register('phone',{
                                        required: true
                                    })}
                                    type="text"
                                    placeholder="Telefono"
                                    className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                                />
                            </div>


                        <div className="mt-6">
                            <button
                                className="inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                                Guardar cambios
                            </button>
                        </div>
                </div>
            </form>
        </div>
    )
}
