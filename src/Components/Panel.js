import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import SidePanel from "./SidePanel";
import axios from "axios";


function Panel()
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

    return (
        <>
            <Header name={"Logout"} path={"/"} icon={'bi bi-power'} />

            <div className="">
                <SidePanel data={formData} />
            </div>



            <div className="d-flex justify-content-center pt-lg-4 pt-2 ">
                <div className="p-4 shadow rounded-4 col-10 d-flex justify-content-center">
                    <p className="pe-2">React Developer |</p>
                    <p className="pe-2">TCS |</p>
                    <p className="pe-2 btn btn-info">View</p>
                    <p className="pe-2 btn btn-primary">Apply</p>
                </div>
            </div>
            <div className="d-flex justify-content-center pt-lg-4 pt-2 ">
                <div className="p-4 shadow rounded-4 col-10 d-flex justify-content-center">
                    <p className="pe-2">MERN Stack Developer | </p>
                    <p className="pe-2">Aptean |</p>
                    <p className="pe-2 btn btn-info">View</p>
                    <p className="pe-2 btn btn-primary">Apply</p>
                </div>
            </div>

        </>
    );
}

export default Panel;