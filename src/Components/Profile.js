import React, { useState, useEffect } from "react";
import Header from "./Header";
import SidePanel from "./SidePanel";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Profile()
{
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

        axios.post("http://localhost:5000/welcome", data).then((res) => {
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


        });

    }, [data]);


    return (
        <>
            <Header name={"Logout"} path={"/"} icon={'bi bi-power'} />

            <div className="justify-content-around ">
                <div className="">
                    <SidePanel data={formData} />
                </div>
                <div className="pt-lg-3 p-2">
                    <div className="d-flex justify-content-center">
                        <div className="pt-lg-3 p-2 col-lg-8 col-10">
                            <div className="bg-light rounded-3 text-center shadow ">
                                <div className="p-2 p-lg-4">
                                    <div className="border border-dark rounded-4">
                                        <div className="pt-3">
                                            <div className="text-start ps-lg-5 ps-2 fs-2">
                                               Fullname : {formData.username}
                                            </div>

                                            <div className="d-lg-flex justify-content-around">
                                                <div>
                                                    <div>
                                                    Email : {formData.email}
                                                    </div>
                                                    <div>
                                                    Phonenumber : {formData.phonenumber}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                    Current Location : {formData.currentlocation}
                                                    </div>
                                                    <div>
                                                    Prefered Location : {formData.preferedlocation}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4">
                                                <div>
                                                Qualification : {formData.qualification}
                                                </div>
                                                <div>
                                                Experience : {formData.experience}
                                                </div>
                                            </div>
                                            
                                            <div className="d-lg-flex justify-content-around">
                                                <div>
                                                    <div>
                                                    LinkedIn URL :  {formData.linkedin}
                                                    </div>
                                                    <div>
                                                    Social Media : {formData.socialmedia}
                                                    </div>
                                                    <div>
                                                    Personalsite : {formData.personalsite}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                    Language Known : {formData.language}
                                                    </div>
                                                    <div>
                                                    Additional Info : {formData.moreinfo}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;