import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';
import background from '../assets/images/home.jpeg' 


import emailjs from '@emailjs/browser';

function FormData() {
    const [formData, setFormData] = useState({
        username: '',
        qualification: '',
        email: '',
        experience: '',
        location:'',
        moreinfo:'',
        document: '',
        phonenumber: ''
    });

    // const [file, setFile] = useState();

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

        const serviceID = 'service_80n007d';
        const templateID = 'template_ufmta6x';
        const publicKey = 'iHCnK6GIVMJY2QBIC';

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
        //     phonenumber: formData.phonenumber

        // };

        const form = document.getElementById("userForm");

        console.log("Axios");

        try {
            const response = await axios.post("http://localhost:4000/register", formData);
            console.log("Post created:", response.data);
        } catch (error) {
            console.error("Error creating post:", error);
        }


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
            <Header name={"Home"} path={"/welcome"} />
            <div className='p-4'>
                <div className='container rounded-3 p-4 col-8' style={{ backgroundImage:`url(${background})` }}>
                    <div className='border border-light rounded-4 p-4 d-flex justify-content-center'>
                        <div className='d-flex justify-content-center text-light'>

                            <form id="userForm" encType="multipart/form-data" onSubmit={handleSubmit} >
                                <div className='d-lg-flex'>
                                    <div className='p-3 col-lg-6 '>
                                        <p className='text-start pt-2'>Full Name : </p>
                                        <input class="form-control" type='text' name='username' id='username' value={formData.username} onChange={handleChange} placeholder='eg: Arun Kumar' />

                                        <p className='text-start pt-2'> Qualification : </p>
                                        <input class="form-control" type='text' name='qualification' id='qualification' value={formData.qualification} onChange={handleChange} placeholder='eg: B.Sc Computer Science' />

                                        <p className='text-start pt-2'> Email Address : </p>
                                        <input class="form-control" type='email' name='email' id='email' value={formData.email} pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onChange={handleChange} placeholder='eg: Yourmail@gmail.com' />

                                        <p className='text-start pt-2'> Location : </p>
                                        <input class="form-control" type='text' name='location' id='location' value={formData.location} onChange={handleChange} placeholder='eg: Chennai' />

                                    </div>
                                    <div className='p-3 col-lg-6'>
                                        <p className='text-start pt-2'> Experience : </p>
                                        <select name='experience' id='experience' className='form-select' onClick={handleChange}>
                                            <option selected>-Select-</option>
                                            <option value={"last_year_passout"}>Last Year Passout</option>
                                            <option value={"1-2"} >1 - 2</option>
                                            <option value={"2-4"}>2 - 4</option>
                                            <option value={"4-6"}>4 - 6</option>
                                            <option value={"6+"}> 6 + </option>
                                        </select>

                                        <p className='text-start pt-2'> Phonenumber : </p>
                                        <input class="form-control" type='text' maxlength={10} name='phonenumber' id='phonenumber' value={formData.phonenumber} onChange={handleChange} placeholder='10 digit number' />

                                        <p className='text-start pt-2'> Attach Document <i class="bi bi-paperclip"></i> : </p>
                                        <input class="form-control" type='file' maxlength={10} name='document' id='document' placeholder='' accept='.doc, .pdf, .docx' />
                                        {/* var upload = multer({storage : storage}).single('myfile');   */}

                                        <p className='text-start pt-2'> Additional Information : </p>
                                        <textarea id="moreinfo" name="moreinfo" rows="4" cols="25" value={formData.moreinfo} onChange={handleChange} placeholder='eg: Cover Letter' >

                                        </textarea>

                                    </div>
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
            <Footer />
        </>
    );

}

export default FormData;