import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import SidePanel from "./SidePanel";
import axios from "axios";
import { useLocation } from "react-router-dom";


function Notification() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phonenumber: '',
        currentlocation: '',
        preferedlocation: '',
        qualification: '',
        experience: '',
        linkedin: '',
        personalsite: '',
        socialmedia: '',
        language: '',
        moreinfo: ''
    });

    const location = useLocation();
    const data = location.state;

    useEffect(() => {

        axios.post("http://localhost:8000/panel", data).then((res) => {
            console.log(res.data);
            //    setFormData.username = res.data.username;
            //    console.log(res.data.username);

            setFormData(prevState => ({
                ...prevState,
                username: res.data.username,
                email: res.data.email,
                phonenumber: res.data.mobilenumber,
                currentlocation: res.data.currentlocation,
                preferedlocation: res.data.preferedlocation,
                qualification: res.data.qualification,
                experience: res.data.experience,
                linkedin: res.data.linkedin,
                personalsite: res.data.personalsite,
                socialmedia: res.data.socialmedia,
                language: res.data.language,
                moreinfo: res.data.moreinfo
            }));




            // setFormData(prevState => ({
            //     ...prevState,
            //     [name]: value
            // }));
        });

    }, [data]);

    
    return(
        <>
            <Header name={"Logout"} path={"/"} icon={'bi bi-power'} />

            <div className="">
                <SidePanel data={formData} />
            </div>

            <div className="d-flex justify-content-center ">
                <div className="p-4 shadow rounded-4 col-8">

                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="d-flex justify-content-center pt-lg-4 pt-2 ">
                                <div className="p-4 shadow rounded-4 col-12 d-flex justify-content-center">
                                    <div className="pt-4">
                                        <p className="pe-2"> React Developer</p>
                                        <p className="pe-2"> TCS</p>
                                    </div>
                                   <div className="p-1 rounded-4 ">
                                        <p className="bg-danger rounded-circle p-2"></p>
                                        <p className="bg-warning rounded-circle p-2"></p>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="d-flex justify-content-center pt-lg-4 pt-2 ">
                                <div className="p-4 shadow rounded-4 col-12 d-flex justify-content-center">
                                    <div className="pt-4">
                                        <p className="pe-2"> React Developer</p>
                                        <p className="pe-2"> TCS</p>
                                    </div>
                                    <div className="p-1 rounded-4 ">
                                        <p className="bg-danger rounded-circle p-2"></p>
                                        <p className="bg-warning rounded-circle p-2"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="d-flex justify-content-center pt-lg-4 pt-2 ">
                                <div className="p-4 shadow rounded-4 col-12 d-flex justify-content-center">
                                    <div className="pt-4">
                                        <p className="pe-2"> React Developer</p>
                                        <p className="pe-2"> TCS</p>
                                    </div>
                                    <div className="p-1 rounded-4 ">
                                        <p className="bg-danger rounded-circle p-2"></p>
                                        <p className="bg-warning rounded-circle p-2"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="d-flex justify-content-center pt-lg-4 pt-2 ">
                                <div className="p-4 shadow rounded-4 col-12 d-flex justify-content-center">
                                    <div className="pt-4">
                                        <p className="pe-2"> React Developer</p>
                                        <p className="pe-2"> TCS</p>
                                    </div>
                                    <div className="p-1 rounded-4 ">
                                        <p className="bg-danger rounded-circle p-2"></p>
                                        <p className="bg-warning rounded-circle p-2"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="d-flex justify-content-center pt-lg-4 pt-2 ">
                                <div className="p-4 shadow rounded-4 col-10 d-flex justify-content-center">
                                    <p className="pe-2">React Developer</p>
                                    <p className="pe-2">TCS</p>
                                    <p className="pe-2 btn btn-info">View</p>
                                    <p className="pe-2 btn btn-primary">Apply</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="d-flex justify-content-center pt-lg-4 pt-2 ">
                                <div className="p-4 shadow rounded-4 col-10 d-flex justify-content-center">
                                    <p className="pe-2">MERN Stack Developer</p>
                                    <p className="pe-2">CTS</p>
                                    <p className="pe-2 btn btn-info">View</p>
                                    <p className="pe-2 btn btn-primary">Apply</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="d-flex justify-content-center pt-lg-4 pt-2 ">
                                <div className="p-4 shadow rounded-4 col-10 d-flex justify-content-center">
                                    <p className="pe-2">Full Stack Developer</p>
                                    <p className="pe-2">Wipro</p>
                                    <p className="pe-2 btn btn-info">View</p>
                                    <p className="pe-2 btn btn-primary">Apply</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Notification;