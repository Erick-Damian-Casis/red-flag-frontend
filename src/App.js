import { BsFillCartFill } from "react-icons/bs";

import { BsPersonFill } from "react-icons/bs";
import ProductCard from "./components/productos/ProductCard";
import Gender from "./components/productos/Gender";
function App() {
  const itemsNav= [{
    item: 'Inicio',
    path: '/'
  },{
    item: 'Tienda',
    path: '/'
  },{
    item: 'Ayuda',
    path: '/'
  }];

  return (
    <div className="">
      <nav>
        <div>
          <ul className="flex py-4 px-16 bg-white justify-between">
           <li>
             <p className='font-titan text-3xl text-orange-500' >Red Flag</p>
           </li>
            <ul className='w-20 flex justify-between items-center'>
                <li>
                    <BsFillCartFill className='text-2xl text-orange-500 hover:opacity-25'></BsFillCartFill>
                </li>
                <li>
                    <BsPersonFill className='text-3xl text-orange-500 hover:opacity-25'></BsPersonFill>
                </li>
            </ul>
          </ul>
        </div>
        <div>
          <ul className="flex py-4 px-16 bg-azul justify-between items-center">
            {itemsNav.map(value=>{
              return(
                  <li className="text-md text-orange-500 tracking-wide cursor-pointer hover:border-white hover:border-b-2 border-b-2 border-transparent transition duration-300">{value.item}</li>
              )
            })}
          </ul>
        </div>
      </nav>
        <Gender></Gender>
    </div>
  );
}

export default App;
