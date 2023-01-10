import {BrowserRouter, Routes as RouteGroup, Route} from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Car from "./pages/Car";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Navbar from "./components/navBar/Navbar";
import {useState} from "react";
import Option from "./pages/Option";

function App() {
    const [user, setUser]= useState('Erick')

  return (
    <div className="">
        <BrowserRouter>
            {user !== '' && <Navbar></Navbar>}
            <RouteGroup>
                <Route path='/Auth' element={<Auth/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/cars' element={<Car/>}/>
                <Route path='/help' element={<Help/>}/>
                <Route path='/products' element={<Product/>}/>
                <Route path='/profiles' element={<Profile/>}/>
                <Route path='/options' element={<Option/>}/>
            </RouteGroup>
        </BrowserRouter>
    </div>
  );
}

export default App;
