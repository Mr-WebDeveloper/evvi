import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SidePanel()
{
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(!open);
        document.getElementById("menu").classList.toggle("invisible");
    }
    
    const handleHome = () => {
        navigate('/welcome');
    }
    const handleReisterForm = () => {
        navigate('/profile');
    }

    return(
        <>
            <div className="">
                <div className="d-flex justify-content-center align-self-stretch pb-5 fixed-bottom col-1" >
                    <div className="text-secodry rounded-4 py-3 ps-4 pb-5 " id="menu">
                        <div className="fs-2 d-flex align-items-center flex-column border border-light bg-light shadow rounded-4">
                            <div className="py-4 ">
                                <i onClick={handleHome}>
                                    <img width="54" height="54" className="" src="https://img.icons8.com/3d-fluency/94/home.png" alt="home" />
                                </i>
                            </div>
                            <div className="py-4 ">
                                <i onClick={handleReisterForm}>
                                    <img width="54" height="54" className="" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="user-male-circle" />
                                </i>
                            </div>
                            <div className="py-4 ">
                                <img width="54" height="54" className="" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-briefcase-web-flaticons-flat-flat-icons.png" alt="external-briefcase-web-flaticons-flat-flat-icons" />
                            </div>
                            <div className="py-4 ">
                                <img width="54" height="54" className="" src="https://img.icons8.com/3d-fluency/94/topic-push-notification.png" alt="topic-push-notification" />
                            </div>
                        </div>
                    </div>
                    <button className="p-0 m-0 border-0 bg-transparent fs-2" onClick={handleClick}>
                        {open ? 
                        <i className="bi bi-caret-right-fill"></i> : <i className="bi bi-caret-left-fill"></i>
                        }
                    </button>
                </div>
            </div>
        </>
    );
}

export default SidePanel;