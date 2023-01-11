import {BsFillCameraFill, BsFillCloudArrowUpFill} from "react-icons/bs";
import {useForm} from "react-hook-form";
import {registerUser} from "../../services/AuthService";

export default function FormProduct({closeModal}){
    const {handleSubmit,register,formState:{errors}}=useForm()

    const onSubmit=(data)=>{
        console.log(data)
        // const formData = new FormData();

    }
    return(
        <div className="h-full fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <form className="flex flex-col bg-white p-6  rounded w-1/3" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                {/*Title*/}
                <h1 className="text-center text-2xl font-bold text-gray-600 mb-5">
                    Agregar Producto
                </h1>
                {/* Nombre */}
                <div className="relative z-0 mb-3 w-full group">
                    <input name="floating_name"
                           id="floating_name"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-azul appearance-none focus:border-orange-600 focus:outline-none focus:ring-0 peer"
                           placeholder=" "
                           type="text"
                           {...register('name',{
                               required: true
                           })}
                    />
                    <label htmlFor="floating_name"
                           className="absolute text-sm text-azul duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Nombre
                    </label>
                    {errors.name?.type==="required"&& <p  className="text-red-400 text-sm">* El campo es requerido</p>}
                </div>

                {/* Precio */}
                <div className="relative z-0 mb-3 w-full group">
                    <input name="floating_price"
                           id="floating_price"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-azul appearance-none focus:border-orange-600 focus:outline-none focus:ring-0 peer"
                           placeholder=" "
                           type="number"
                           step='0.01'
                           {...register('price',{
                               required: true
                           })}
                    />
                    <label htmlFor="floating_price"
                           className="absolute text-sm text-azul duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Precio
                    </label>
                    {errors.price?.type==="required"&& <p  className="text-red-400 text-sm">* El campo es requerido</p>}
                </div>
                {/* Stock */}
                <div className="relative z-0 mb-3 w-full group">
                    <input name="floating_stock"
                           id="floating_stock"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-azul appearance-none focus:border-orange-600 focus:outline-none focus:ring-0 peer"
                           placeholder=" "
                           type="text"
                           {...register('stock',{
                               required: true
                           })}
                    />
                    <label htmlFor="floating_stock"
                           className="absolute text-sm text-azul duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Stock
                    </label>
                    {errors.price?.type==="required"&& <p  className="text-red-400 text-sm">* El campo es requerido</p>}
                </div>
                {/* Descuento */}
                <div className="relative z-0 mb-3 w-full group">
                    <input name="floating_discount"
                           id="floating_discount"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-azul appearance-none focus:border-orange-600 focus:outline-none focus:ring-0 peer"
                           placeholder=" "
                           type="text"
                           {...register('discount',{
                               required: true
                           })}
                    />
                    <label htmlFor="floating_discount"
                           className="absolute text-sm text-azul duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Descuento
                    </label>
                    {errors.discount?.type==="required"&& <p  className="text-red-400 text-sm">* El campo es requerido</p>}
                </div>
                {/* estado */}
                <div>
                    <label htmlFor="state"
                           className=" inline-flex relative items-center cursor-pointer">
                        <input type="checkbox"
                               {...register('state')}
                               id="state"
                               className="sr-only peer"
                        />
                        <div
                            className="w-11 h-6 bg-gray-200 appearance-none rounded-full peer dark:bg-azul peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
                        <span className="ml-3 text-lg text-gray-500">
                                Disponible
                            </span>
                    </label>
                </div>

                {/* desciption */}
                <div className="relative z-0 my-3  w-full group">
                    <textarea name="floating_description"
                           id="floating_description"
                           className="block py-2 px-2 w-full text-sm text-gray-900 bg-transparent border-2 border-azul appearance-none focus:border-orange-600 focus:outline-none focus:ring-0 peer"
                           placeholder=" "
                           {...register('name',{
                               required: true
                           })}
                    />
                    <label htmlFor="floating_description"
                           className="mx-3 absolute text-sm text-azul duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Descripción
                    </label>
                    {errors.price?.type==="required"&& <p  className="text-red-400 text-sm">* El campo es requerido</p>}
                </div>
                <div className="flex w-auto items-center justify-center bg-grey-lighter">
                    <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-200">
                        <BsFillCloudArrowUpFill/>
                        <span className="mt-2 text-sm leading-normal">Subir Imagen</span>
                        <input type='file'
                               className="hidden"
                               {...register('image')}
                        />
                    </label>
                </div>
                <div className="mt-6">
                    <button type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >Crear
                    </button>
                    <button onClick={()=>closeModal()}
                            className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >Cancelar
                    </button>
                </div>
            </form>
        </div>
    )
}
