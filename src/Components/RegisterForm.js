import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import background from '../assets/images/home.jpeg' 
import InputForm from './InputForm';
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
        yearofpassing: '',
        experience: '',
        orgname: '',
        designation: '',
        cmpexperience:'',
        projects:'',
        projectskills:'',
        projecturl:'',
        otherskills:'',
        linkedin: '',
        personalsite: '',
        socialmedia: '',
        document: '',
        language: '',
        moreinfo: ''
    });
    const navigate = useNavigate();


    // const [file, setFile] = useState();


    const location = useLocation();
    const data = location.state;

    // console.log("Register..");
    // console.log(data);

    // const [count, setCount] = useState(0);
    
    const [stage, setStage] = useState(1);

    const [experience, setExperience] = useState(0);
    

    const [submit, setSubmit] = useState(true);

    function onButtonClick()
    {
        setStage(stage + 1);
        if(stage === 5){
            setSubmit(false);
        }
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
            yearofpassing: data.yearofpassing,
            experience: data.experience,
            orgname: data.orgname,
            cmpexperience: data.cmpexperience,
            projects: data.projects,
            projectskills: data.projectskills,
            projecturl: data.projecturl,
            otherskills: data.otherskills,
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
        console.log("function Change")
        console.log(value);
        if (name === 'experience' && value === 'fresher')
        {
            setExperience(1);
        }
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        
        console.log("Handle Submit");
        console.log("Axios");
        // output undefined
        console.log("file details");
        console.log(formData);

            axios.post("http://localhost:8000/register", formData).then((res) => {
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
                                        {stage === 1 &&
                                            <div className='p-3'>

                                                <InputForm content={"Enter Name"} identifier={"username"} formData={formData} onchangeData={handleChange} placeholder={"Enter Your Full Name"} value={formData.username} />
                                                
                                                <InputForm content={"EnterEmail ID"} identifier={"email"} formData={formData} onchangeData={handleChange} placeholder={"Enter Your Mail ID"} value={formData.email} />

                                                <InputForm content={"Enter Phone Number"} identifier={"mobilenumber"} formData={formData} onchangeData={handleChange} placeholder={"Enter Your Mobile Number"} value={formData.mobilenumber} />

                                            </div> 
                                        }

  
                                        {stage === 2 &&
                                            <div className='p-3'>

                                                <InputForm content={"Current Location"} identifier={"currentlocation"} formData={formData} onchangeData={handleChange} placeholder={"Enter Your Current Location"} value={formData.currentlocation} />

                                                <InputForm content={"Prefered Location"} identifier={"preferedlocation"} formData={formData} onchangeData={handleChange} placeholder={"Enter Your Prefered Work Location"} value={formData.preferedlocation} />

                                            </div>
                                        }

                                        {/* 2 */}
                                       {stage === 3 &&
                                            <div className='p-3'>

                                                <InputForm content={"Qualification"} identifier={"qualification"} formData={formData} onchangeData={handleChange} placeholder={"Enter Your Qualification"} value={formData.qualification} />
                                                
                                                <InputForm content={"Passout Year"} identifier={"yearofpassing"} formData={formData} onchangeData={handleChange} placeholder={"Enter Year of Passing"} value={formData.yearofpassing} />

                                                <div className='pt-4'>
                                                    {/* <p className='text-start pt-2'> Experience : </p> */}
                                                    <select name='experience' id='experience' className='text-light border border-0 border-bottom bg-transparent col-12' onClick={handleChange} required>
                                                        <option className='bg-warning text-dark' defaultValue={""}>-Select-</option>
                                                        <option className='bg-warning text-dark' value={"fresher"}>Fresher</option>
                                                        <option className='bg-warning text-dark' value={"1-2"} >1 - 2</option>
                                                        <option className='bg-warning text-dark' value={"2-4"}>2 - 4</option>
                                                        <option className='bg-warning text-dark' value={"4-6"}>4 - 6</option>
                                                        <option className='bg-warning text-dark' value={"6+"}> 6 + </option>
                                                    </select>
                                                    <div id="preferedLocation" className=" form-text pb-3 text-light">Experience</div>
                                                </div>

                                            </div>
                                        }


                                        {stage === 4 &&
                                            <div className='p-3'>
                                                    {experience === 1 ?
                                                    <InputForm content={"College Name"} identifier={"orgname"} formData={formData} onchangeData={handleChange} placeholder={"Enter Your College Name"} value={formData.orgname} />
                                                    :
                                                    <>
                                                        <InputForm content={"Previous Company Name"} identifier={"orgname"} formData={formData} onchangeData={handleChange} placeholder={"Enter Your Organization Name"} value={formData.orgname} />
                                                        <InputForm content={"Designation"} identifier={"designation"} formData={formData} onchangeData={handleChange} placeholder={"Enter Your Designation"} value={formData.designation} />
                                                        <InputForm content={"Work Experience"} identifier={"cmpexperience"} formData={formData} onchangeData={handleChange} placeholder={"Experience in this Company"} value={formData.cmpexperience} />
                                                    </>

                                                    }
                                                    <InputForm content={"Previous Projects"} identifier={"projects"} formData={formData} onchangeData={handleChange} placeholder={"Enter Your Project Name"} value={formData.projects} />
                                                    <InputForm content={"Skills Learned in Project"} identifier={"projectskills"} formData={formData} onchangeData={handleChange} placeholder={"Enter Skills Learned from Project"} value={formData.projectskills} />
                                                    <InputForm content={"Project URL if any ? "} identifier={"projecturl"} formData={formData} onchangeData={handleChange} placeholder={"Enter Project URL"} value={formData.projecturl} />
                                                    <InputForm content={"Any Other Skills"} identifier={"otherskills"} formData={formData} onchangeData={handleChange} placeholder={"Enter Additional Skills"} value={formData.otherskills} />
                                            </div>
                                        }


                                        {/* 3 */}
                                       {stage === 5 &&
                                            <div className='p-3'>
                                                     
                                                <InputForm content={"Linked In URL"} identifier={"linkedin"} formData={formData} onchangeData={handleChange} placeholder={"Enter Your Linked In URL"} value={formData.linkedin} />
                                                
                                                <InputForm content={"Personal Site URL"} identifier={"personalsite"} formData={formData} onchangeData={handleChange} placeholder={"Enter Personal Site URL"} value={formData.personalsite} />
                                                
                                                <InputForm content={"Social Media URL"} identifier={"socialmedia"} formData={formData} onchangeData={handleChange} placeholder={"Enter Your Current Location"} value={formData.socialmedia} />

                                            </div>
                                        }

                                        {/* 4 */}
                                        {stage === 6 && 
                                            <div className='p-3'>

                                                <InputForm content={"Language Known"} identifier={"language"} formData={formData} onchangeData={handleChange} placeholder={"Prefered Language for Communication"} value={formData.language} />


                                                <input
                                                    className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-11 btn"
                                                    type='file'
                                                    name='document'
                                                    id='document'
                                                    accept='.doc, .pdf, .docx'
                                                    value={formData.document}
                                                    onChange={(event) => handleChange(event)} // Add onChange event handler
                                                    required
                                                />
                                               

                                                <div className='pt-4'>
                                                    <textarea id="moreinfo" className='text-light border border-1 border-bottom bg-transparent col-12 col-lg-11' name="moreinfo" rows="4" cols="25" value={formData.moreinfo} onChange={handleChange} placeholder='How Fun You Are ? ' required />
                                                    <div id="preferedLocation" className=" form-text pb-3 text-light">Tell About Yourself...</div>
                                                </div>

                                            </div>
                                        }


                                    </div>


                                    {submit ? 
                                        <div className=' text-end '>
                                            <p type='submit' className='rounded-pill btn btn-outline-info px-4' onClick={onButtonClick} >Next</p>
                                        </div>
                                    :
                                    <div className='text-center pt-3'>
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