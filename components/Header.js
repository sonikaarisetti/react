import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const [btnName,setBtnName] = useState("Login");
    //let btnName = "Login";
    const onlineStatus=useOnlineStatus();

    return (
    <div className="flex justify-between bg-pink-100">
        <div className="logo-container">
            <img className="w-36" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    OnlineStatus:{onlineStatus? "✅" : "🔴"}
                </li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <a href="/about">About us</a>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact us</Link>
                </li>
                <li className="px-4">
                    <Link to="/Grocery">Grocery</Link>
                </li>
                <li className="px-4">Cart</li>
                <button 
                  className="login" 
                  onClick={() => {
                    btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
                  }}
                >{btnName}</button>
            </ul>
        </div>
    </div>
    );
};

export default Header;