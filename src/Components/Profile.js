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
        mobilenumber: '',
        currentlocation: '',
        preferedlocation: '',
        qualification: '',
        yearofpassing: '',
        experience: '',
        orgname: '',
        cmpexperience: '',
        projects: '',
        projectskills: '',
        projecturl: '',
        otherskills: '',
        linkedin: '',
        personalsite: '',
        socialmedia: '',
        language: '',
        document: '',
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
                moreinfo: res.data.moreinfo,
                yearofpassing: res.data.yearofpassing,
                orgname: res.data.orgname,
                cmpexperience: res.data.cmpexperience,
                projects: res.data.projects,
                projectskills: res.data.projectskills,
                projecturl: res.data.projecturl,
                otherskills: res.data.otherskills,
                // document: res.data.,
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
                <div className="pt-lg-3 p-2 pb-3 pb-lg-4 mb-lg-5">
                    <div className="d-flex justify-content-center">
                        <div className="pt-lg-3 p-2 col-lg-8 col-10">
                            <div className="bg-light rounded-3 text-center shadow ">
                                <div className="p-2 p-lg-4">
                                    <div className="border border-dark rounded-4">
                                        <div className="pt-3">

                                            <div className="p-2 p-lg-4">
                                                <div className="border border-light bg-light shadow rounded-4">
                                                    <div className="p-lg-4 p-2">
                                                        <div className="text-center p-2 bg-info col-12 rounded-top-4">
                                                            <h2>Profile Details</h2>
                                                        </div>
                                                        
                                                        <div className="d-lg-flex justify-content-around">

                                                            <div className="text-start bg-secondary text-light p-2 col-6">
                                                                <div className="p-2">
                                                                    <b>Name :</b> {formData.username}
                                                                </div>
                                                                <div className="p-2">
                                                                    <b>Qualification :</b> {formData.qualification}
                                                                </div>
                                                                <div className="p-2">
                                                                    <b>Last Experience in :</b> {formData.orgname}
                                                                </div>
                                                                <div className="p-2">
                                                                    <b>Completed In :</b> {formData.yearofpassing}
                                                                </div>

                                                                {formData.cmpexperience && 
                                                                    <div className="p-2">
                                                                        <b>Work Experience : </b>{formData.cmpexperience}
                                                                    </div>
                                                                }

                                                                <div className="p-2">
                                                                    <b>Communicated In : </b>{formData.language}
                                                                </div>
                                                                {/* <div className="p-2">
                                                                    <b>Additional Info :</b> {formData.about}
                                                                </div> */}
                                                                <div className="p-2">
                                                                    <b>LinkedIn URL : </b> {formData.linkedin}
                                                                </div>
                                                                <div>
                                                                    <div className="p-2">
                                                                        <b>Social Media URL :</b>{formData.socialmedia}
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <b>Personalsite URL :</b>{formData.personalsite}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="col-6 bg-light text-dark ps-2">

                                                                <div className="text-start p-2 pt-3">
                                                                    <div className="p-2">
                                                                        <b>Experience :</b> {formData.experience}
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <b>Email ID :</b> {formData.email}
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <b>Phonenumber : </b> {formData.phonenumber}
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <b>Current Location :</b> {formData.currentlocation}
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <b>Prefered Location :</b> {formData.preferedlocation}
                                                                    </div>          

                                                                    <div className="p-2">
                                                                        <b>Projects Done :</b> {formData.projects}
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <b>Skills Learned from Project:</b> {formData.projectskills}
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <b>Project URL :</b> {formData.projecturl}
                                                                    </div>
                                                                    <div className="p-2">
                                                                        <b>Additional Skills :</b> {formData.otherskills}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="text-start p-2 bg-info text-dark col-12 rounded-bottom-4">
                                                            <b>Additional Info :</b> {formData.moreinfo}
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
            </div>
        </>
    );
}

export default Profile;