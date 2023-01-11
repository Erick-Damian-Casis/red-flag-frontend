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
import NavbarAdmin from "./components/navBar/NavbarAdmin";
import Purchase from "./pages/Purchase";
import User from "./pages/User";
import Shop from "./pages/Shop";


function App() {
    const [user, setUser]= useState('admin')

  return (
    <div className="">
        <BrowserRouter>
            {user === 'client'
                ? <Navbar/>
                :<NavbarAdmin/>
            }
            <RouteGroup>
                <Route path='/Auth' element={<Auth/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/cars' element={<Car/>}/>
                <Route path='/help' element={<Help/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/profiles' element={<Profile/>}/>
                <Route path='/options' element={<Option/>}/>
                <Route path='/purchases' element={<Purchase/>}/>
                <Route path='/users' element={<User/>}/>
                <Route path='/products' element={<Product/>}/>
            </RouteGroup>
        </BrowserRouter>
    </div>
  );
}

export default App;
