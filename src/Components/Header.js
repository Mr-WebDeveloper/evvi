import React from "react";
import Logo from '../assets/images/logo2.png'
import { useNavigate } from 'react-router-dom';
// import Login from "./Login";



function Header({...props}) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.path);
    }

    return (
            <div className="px-lg-4 pt-2">
                <div className="bg-light border-light border container-flid d-flex justify-content-between p-3 rounded-4 shadow sticky-top">

                    <img src={Logo} alt="Logo" height={50} width={100}/>

                    <div className="px-5">
                        <button className="btn btn-warning px-4" onClick={handleClick} ><i className={props.icon}></i> {props.name}</button> 
                    </div>

                </div>
            </div>
    );
}

export default Header;