import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import background from '../assets/images/home.jpeg' 
// import SidePanel from './SidePanel';

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

    const [count, setCount] = useState(0);
    
    const [detail, setDetail] = useState(true);
    const [detail1, setDetail1] = useState(false);
    const [detail2, setDetail2] = useState(false);
    const [detail3, setDetail3] = useState(false);
    const [detail4, setDetail4] = useState(false);
    

    const [submit, setSubmit] = useState(true);

    function onButtonClick()
    {
        setCount(count + 1);

        switch(count){
            case 1:
                setDetail(false);
                setDetail1(true);
                break;

            case 2:
                setDetail1(false);
                setDetail2(true);
                break;
            
            case 3:
                setDetail2(false);
                setDetail3(true);
                break;

            case 4:
                setDetail3(false);
                setDetail4(true);
                setSubmit(false);
                break;
        };
    };

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
                    <div className='container rounded-3 p-4  pb-5 mb-5 pb-lg-4 col-lg-5 col-12 col-md-7 ' style={{ backgroundImage:`url(${background})` }}>
                        <div className='border border-light rounded-4 p-4  d-flex justify-content-center'>
                            <div className='d-flex justify-content-center text-light'>
                    

                                <form id="userForm" encType="multipart/form-data" onSubmit={handleSubmit} >
                                    <h3>Register Details</h3>
                                    <hr />
                                    <div className='d-lg-flex'>


                                        {/* form sart  */}

                                        {/* 1 */}
                                        {detail && 
                                            <div className='p-3 col-l-6'>
                                                <p className='text-start pt-2'>Full Name : </p>
                                                <input className="form-control" type='text' name='username' id='username' value={formData.username} onChange={handleChange} placeholder='eg: Arun Kumar' required />

                                                <p className='text-start pt-2'>Mail ID : </p>
                                                <input className="form-control" type='email' name='email' id='email' readonly="readonly" value={formData.email} onChange={handleChange} placeholder='eg: Yourmail@gmail.com' />

                                                <p className='text-start pt-2'>mobilenumber : </p>
                                                <input className="form-control" type='text' name='mobilenumber' id='mobilenumber' readonly="readonly" value={formData.mobilenumber} onChange={handleChange} placeholder='eg: 10-digit number' />

                                            </div> 
                                        }

  
                                        {detail1 && 
                                            <div className='p-3 col-l-6'>
                                                <p className='text-start pt-2'>CurrentLocation : </p>
                                                <input className="form-control" type='text' name='currentlocation' id='currentlocation' value={formData.currentlocation} onChange={handleChange} placeholder='eg: Madurai' required />

                                                <p className='text-start pt-2'>Preferecd Location : </p>
                                                <input className="form-control" type='text' name='preferedlocation' id='preferedlocation' value={formData.preferedlocation} onChange={handleChange} placeholder='eg: Chennai' required />
                                            </div>

                                        }

                                        {/* 2 */}
                                        {detail2 && 
                                            <div className='p-3 col-l-6'>

                                                <p className='text-start pt-2'>Qualification : </p>
                                                <input className="form-control" type='text' name='qualification' id='qualification' value={formData.qualification} onChange={handleChange} placeholder='eg: B.E CSE' required />

                                                <p className='text-start pt-2'> Experience : </p>
                                                <select name='experience' id='experience' className='form-select' onClick={handleChange} required>
                                                    <option defaultValue={""}>-Select-</option>
                                                    <option value={"last_year_passout"}>Last Year Passout</option>
                                                    <option value={"1-2"} >1 - 2</option>
                                                    <option value={"2-4"}>2 - 4</option>
                                                    <option value={"4-6"}>4 - 6</option>
                                                    <option value={"6+"}> 6 + </option>
                                                </select>


                                            </div>
                                        }

                                        {/* 3 */}
                                        {detail3 && 
                                            <div className='p-3 col-l-6'>
                                                <p className='text-start pt-2'>LinkedIn URL : </p>
                                                <input className="form-control" type='text' name='linkedin' id='linkedin' value={formData.linkedin} onChange={handleChange} placeholder='eg: https://LinkedIn/.username.LinkedIn.com' required />

                                                <p className='text-start pt-2'>Personal Website URL : </p>
                                                <input className="form-control" type='text' name='personalsite' id='personalsite' value={formData.personalsite} onChange={handleChange} placeholder='eg: Your Personal Wesite If Any ' required />

                                                <p className='text-start pt-2'>Other Social Media URL : </p>
                                                <input className="form-control" type='text' name='socialmedia' id='socialmedia' value={formData.socialmedia} onChange={handleChange} placeholder='eg: GeeksforGeeks, Leetcode' required />

                                            </div>
                                        }

                                        {/* 4 */}
                                        {detail4 && 
                                            <div className='p-3 col-l-6'>
                                                <p className='text-start pt-2'>Language Known : </p>
                                                <input className="form-control" type='text' name='language' id='language' value={formData.language} onChange={handleChange} placeholder='eg: Tamil, English' required />

                                                <p className='text-start pt-2'> Attach Document <i className="bi bi-paperclip"></i> : </p>
                                                <input className="form-control" type='file' name='document' id='document' placeholder='' accept='.doc, .pdf, .docx' required />

                                                <p className='text-start pt-2'>How Fun You Are ? : </p>
                                                <textarea id="moreinfo" name="moreinfo" rows="4" cols="25" value={formData.moreinfo} onChange={handleChange} placeholder='eg: Cover Letter' required />

                                            </div>
                                        }


                                    </div>


                                    {submit ? 
                                        <div className=' text-end '>
                                            <p type='submit' className='rounded-pill btn btn-outline-info px-4' onClick={onButtonClick} >Next</p>
                                    </div>
                                    :
                                    <div className='text-center pt-3'>
                                        {/* <button type='submit' className='btn btn-warning px-4' >Submit</button> */}
                                        <button type='submit' className='btn btn-warning px-4' >Submit</button>
                                    </div>
                                    }
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