import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import background from '../assets/images/home.jpeg' 
import SidePanel from './SidePanel';

// import emailjs from '@emailjs/browser';


function FormData() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobilenumber: '',
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
    const navigate = useNavigate();
    // const [file, setFile] = useState();


    const location = useLocation();
    const data = location.state;

    console.log("Register..");
    console.log(data);

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            username: data.username,
            email: data.email,
            mobilenumber: data.mobilenumber,
            currentlocation: data.currentlocation,
            preferedlocation: data.preferedlocation,
            qualification: data.qualification,
            experience: data.experience,
            linkedin: data.linkedin,
            personalsite: data.personalsite,
            socialmedia: data.socialmedia,
            language: data.language,
            document: data.document,
            moreinfo: data.moreinfo
        }));
    }, [data]);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        
        console.log("Handle Submit");
        console.log("Axios");
            axios.post("http://localhost:5000/register", formData).then((res) => {
                console.log(res);
                if(res.status === 201) {
                    navigate('/welcome', {
                        state: formData
                    });
                } else {
                    navigate('/registerform')
                }
            }).catch((err) => {
                console.log(err);
                return
            });

        // const serviceID = 'service_80n007d';
        // const templateID = 'template_ufmta6x';
        // const publicKey = 'iHCnK6GIVMJY2QBIC';

        // const templateParams = {
        //     from_name: formData.username,
        //     from_email: formData.email,
        //     to_name: 'mudalamrajarajacholan1@gmail.com',

        //     name: formData.username,
        //     qualification: formData.qualification,
        //     email: formData.email,
        //     experience: formData.experience,
        //     location: formData.location,
        //     moreinfo: formData.moreinfo,
        //     document: formData.document,
        //     mobilenumber: formData.mobilenumber

        // };

        // const form = document.getElementById("userForm");

            

        // await emailjs.sendForm(serviceID, templateID, form, publicKey)
        //     .then((response) => {
        //         console.log("email send successfully", response);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })

    }







    return (
        <>
            <Header name={"Home"} path={"/welcome"} icon={'bi bi-house-door'} />
            <div className="justify-content-around ">
                {/* <div className="">
                    <SidePanel />
                </div> */}
                <div className='p-4'>
                    <div className='container rounded-3 p-4 col-8' style={{ backgroundImage:`url(${background})` }}>
                        <div className='border border-light rounded-4 p-4 d-flex justify-content-center'>
                            <div className='d-flex justify-content-center text-light'>

                                <form id="userForm" encType="multipart/form-data" onSubmit={handleSubmit} >
                                    <div className='d-lg-flex'>


                                        {/* <div className='p-3 col-lg-6 '>

                                            <p className='text-start pt-2'>Full Name : </p>
                                            <input className="form-control" type='text' name='username' id='username' value={formData.username} onChange={handleChange} placeholder='eg: Arun Kumar' />

                                            <p className='text-start pt-2'> Email Address : </p>
                                            <input className="form-control" type='email' name='email' id='email' value={formData.email} pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}" onChange={handleChange} placeholder='eg: Yourmail@gmail.com' />

                                            <p className='text-start pt-2'> CurrentLocation : </p>
                                            <input className="form-control" type='text' name='currentlocation' id='currentlocation' value={formData.currentlocation} onChange={handleChange} placeholder='eg: Chennai' />

                                            <p className='text-start pt-2'> Preferecd Location : </p>
                                            <input className="form-control" type='text' name='location' id='location' value={formData.location} onChange={handleChange} placeholder='eg: Chennai' />

                                            <p className='text-start pt-2'> Qualification : </p>
                                            <input className="form-control" type='text' name='qualification' id='qualification' value={formData.qualification} onChange={handleChange} placeholder='eg: B.Sc Computer Science' />

                                        </div> */}

                                        {/* form sart  */}

                                        {/* 1 */}
                                        <div className='p-3 col-l-6'>
                                            <p className='text-start pt-2'>Full Name : </p>
                                            <input className="form-control" type='text' name='username' id='username' value={formData.username} onChange={handleChange} placeholder='eg: Arun Kumar' />

                                            <p className='text-start pt-2'>Mail ID : </p>
                                            <input className="form-control" type='email' name='email' id='email' readonly="readonly" value={formData.email} onChange={handleChange} placeholder='eg: Yourmail@gmail.com' />

                                            <p className='text-start pt-2'>mobilenumber : </p>
                                            <input className="form-control" type='text' name='mobilenumber' id='mobilenumber' readonly="readonly" value={formData.mobilenumber} onChange={handleChange} placeholder='eg: 10-digit number' />

                                            <p className='text-start pt-2'>CurrentLocation : </p>
                                            <input className="form-control" type='text' name='currentlocation' id='currentlocation' value={formData.currentlocation} onChange={handleChange} placeholder='eg: Madurai' />

                                            <p className='text-start pt-2'>Preferecd Location : </p>
                                            <input className="form-control" type='text' name='preferedlocation' id='preferedlocation' value={formData.preferedlocation} onChange={handleChange} placeholder='eg: Chennai' />
                                        </div>

                                        {/* 2 */}
                                        <div className='p-3 col-l-6'>

                                            <p className='text-start pt-2'>Qualification : </p>
                                            <input className="form-control" type='text' name='qualification' id='qualification' value={formData.qualification} onChange={handleChange} placeholder='eg: B.E CSE' />

                                            <p className='text-start pt-2'> Experience : </p>
                                            <select name='experience' id='experience' className='form-select' onClick={handleChange}>
                                                <option defaultValue={""}>-Select-</option>
                                                <option value={"last_year_passout"}>Last Year Passout</option>
                                                <option value={"1-2"} >1 - 2</option>
                                                <option value={"2-4"}>2 - 4</option>
                                                <option value={"4-6"}>4 - 6</option>
                                                <option value={"6+"}> 6 + </option>
                                            </select>


                                        </div>

                                        {/* 3 */}
                                        <div className='p-3 col-l-6'>
                                            <p className='text-start pt-2'>LinkedIn URL : </p>
                                            <input className="form-control" type='text' name='linkedin' id='linkedin' value={formData.linkedin} onChange={handleChange} placeholder='eg: https://LinkedIn/.username.LinkedIn.com' />

                                            <p className='text-start pt-2'>Personal Website URL : </p>
                                            <input className="form-control" type='text' name='personalsite' id='personalsite' value={formData.personalsite} onChange={handleChange} placeholder='eg: Your Personal Wesite If Any ' />

                                            <p className='text-start pt-2'>Other Social Media URL : </p>
                                            <input className="form-control" type='text' name='socialmedia' id='socialmedia' value={formData.socialmedia} onChange={handleChange} placeholder='eg: GeeksforGeeks, Leetcode' />

                                        </div>

                                        {/* 4 */}

                                        <div className='p-3 col-l-6'>
                                            <p className='text-start pt-2'>Language Known : </p>
                                            <input className="form-control" type='text' name='language' id='language' value={formData.language} onChange={handleChange} placeholder='eg: Tamil, English' />

                                            <p className='text-start pt-2'> Attach Document <i className="bi bi-paperclip"></i> : </p>
                                            <input className="form-control" type='file' name='document' id='document' placeholder='' accept='.doc, .pdf, .docx' />

                                            <p className='text-start pt-2'>How Fun You Are ? : </p>
                                            <textarea id="moreinfo" name="moreinfo" rows="4" cols="25" value={formData.moreinfo} onChange={handleChange} placeholder='eg: Cover Letter' />

                                        </div>




                                        {/* <div className='p-3 col-lg-6'>
                                            <p className='text-start pt-2'> Experience : </p>
                                            <select name='experience' id='experience' className='form-select' onClick={handleChange}>
                                                <option defaultValue={""}>-Select-</option>
                                                <option value={"last_year_passout"}>Last Year Passout</option>
                                                <option value={"1-2"} >1 - 2</option>
                                                <option value={"2-4"}>2 - 4</option>
                                                <option value={"4-6"}>4 - 6</option>
                                                <option value={"6+"}> 6 + </option>
                                            </select>

                                            <p className='text-start pt-2'> Phonenumber : </p>
                                            <input className="form-control" type='text' maxLength={10} name='phonenumber' id='phonenumber' value={formData.phonenumber} onChange={handleChange} placeholder='10 digit number' />

                                            <p className='text-start pt-2'> Attach Document <i className="bi bi-paperclip"></i> : </p>
                                            <input className="form-control" type='file' name='document' id='document' placeholder='' accept='.doc, .pdf, .docx' />

                                            <p className='text-start pt-2'> Additional Information : </p>
                                            <textarea id="moreinfo" name="moreinfo" rows="4" cols="25" value={formData.moreinfo} onChange={handleChange} placeholder='eg: Cover Letter' >

                                            </textarea>

                                        </div> */}

                                    </div>
                                    <div className='text-center pt-3'>
                                        {/* <button type='submit' className='btn btn-warning px-4' >Submit</button> */}
                                        <button type='submit' className='btn btn-warning px-4' >Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default FormData;