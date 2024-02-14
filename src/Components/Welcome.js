import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Header from "./Header";
import SidePanel from "./SidePanel";

// import RegisterForm from "./RegisterForm"

function Welcome()
{
    // const [register, setRegister] = useState(false);

    // const handleRegister = () => {
    //     setRegister(true);
    // }

    const navigate = useNavigate();

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
                 document: res.data.document,
                 moreinfo: res.data.moreinfo
            }));
        

           

                // setFormData(prevState => ({
                //     ...prevState,
                //     [name]: value
                // }));
        });

    }, [data]);
    
    console.log("user name ---");
    console.log(formData.username);

    // const handleClick = () => {
    //     navigate('/', { state: formData });
    // }

    return (
        <>
            <Header name={"Logout"} path={"/"} icon={'bi bi-power'} />

            <div className="justify-content-around ">
                <div className="">
                     <SidePanel />
                </div>

                <div className="">
                    <div className="pt-5 px-3 ">
                        <div className="d-flex justify-content-end">
                            <h2 className="px-4 py-2 bg-warning text-dark rounded-start-pill text-center">
                                EVVI <i> ELECT </i>
                            </h2>
                        </div>

                        <div className="p-5">
                            {formData.username ? 
                                <h2 className="px-4 py-2 text-dark rounded-start-pill text-center">Welcome {formData.username} !</h2>
                                :
                                <h2 className="px-4 py-2 text-dark rounded-start-pill text-center">Welcome buddy !</h2>
                                
                            }
                        </div>

                        {formData.username ?
                            <></>
                            :
                            <div className="p-5 text-center">
                                <button className="btn btn-warning px-5 mx-5 fs-2 rounded-5"><i className="bi bi-journal-bookmark"></i> Fill Your Details </button>
                            </div>
                        }
                        


                        <div className="pb-5"></div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Welcome;