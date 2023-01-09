import {BsFillCartFill, BsFillHeartFill, BsSearch} from "react-icons/bs";

export default function ProductCard(){

    const array = [1,2,3,4,5,6,7,8,9,10]
    return(
        <div className="w-full h-screen flex justify-center items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {array?.map(value=>{
                return (
                    <div className="w-60 m-10">
                        <div
                            className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
                            <div className="overflow-hidden relative">
                                <img className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
                                     src="https://klbtheme.com/shopwise/fashion/wp-content/uploads/2020/04/product_img10-1.jpg"
                                     alt="image"/>
                                <div className="flex justify-center">
                                    <div
                                        className="absolute bottom-2 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        {/* Iconos de preferencia */}
                                        <div className='flex'>
                                            <a className='bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out' href="">
                                                <BsFillCartFill className='transition duration-300 ease-in-out flex justify-center items-center text-gray-100'></BsFillCartFill>
                                            </a>
                                            <a className='bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out' href="">
                                                <BsFillHeartFill className='transition duration-300 ease-in-out flex justify-center items-center text-gray-100'></BsFillHeartFill>
                                            </a>
                                            <a className='bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out' href="">
                                                <BsSearch className='transition duration-300 ease-in-out flex justify-center items-center text-gray-100'></BsSearch>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-white">
                                <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">White
                                    Line Dress</h1>
                                <div className="flex py-2">
                                    <p className="mr-2 text-xs text-gray-600">$45.00</p>
                                    <p className="mr-2 text-xs text-red-600 line-through">$15.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
