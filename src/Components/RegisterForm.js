import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Header from './Header';
import background from '../assets/images/home.jpeg' 
import Experience from './Experience';
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
        projects:'',
        projectskills:'',
        projecturl:'',
        otherskills:'',
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
        if (name === 'experience' && value === 'fresher')
        {
            setExperience(1);
        }
        else
        {
            setExperience(2)
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
                                                
                                        {/* <InputForm content={"Current Location"} identifier={"currentlocation"} formData={formData} onChangeData={handleChange} placeholder={"Enter Your Current Location"} /> */}



                                        {/* form sart  */}

                                        {/* 1 */}
                                        {stage === 1 &&
                                            <div className='p-3'>

                                                {/* <div className='pt-3'>
            
                                                    <input className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-11" type='text' name='username' autoComplete='off' id='username' value={formData.username} onChange={handleChange} placeholder='Enter Your Full Name' required />
                                                    <div id="nameHelp" className=" form-text pb-3 text-light">Name</div>
                                                </div> */}

                                                <InputForm content={"Name"} identifier={"username"} formData={formData} onChangeData={handleChange} placeholder={"Enter Your Full Name"} value={formData.username} />


                                                {/* <div className='pt-4'>
                                                    <input className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-11" type='email' name='email' id='email' readonly="readonly" value={formData.email} onChange={handleChange} placeholder='eg: Yourmail@gmail.com' />
                                                    <div id="emailHelp" className=" form-text pb-3 text-light">Email ID</div>
                                                </div> */}
                                                
                                                <InputForm content={"Email ID"} identifier={"email"} formData={formData} onChangeData={handleChange} placeholder={"Enter Your Mail ID"} value={formData.email} />

                                                {/* <div className='pt-4'>
                                                    <input className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-11" type='text' name='mobilenumber' id='mobilenumber' readonly="readonly" value={formData.mobilenumber} onChange={handleChange} placeholder='eg: 10-digit number' />
                                                    <div id="emailHelp" className=" form-text pb-3 text-light">Phone Number</div>
                                                </div> */}

                                                <InputForm content={"Phone Number"} identifier={"mobilenumber"} formData={formData} onChangeData={handleChange} placeholder={"Enter Your Mobile Number"} value={formData.mobilenumber} />



                                            </div> 
                                        }

  
                                        {stage === 2 &&
                                            <div className='p-3'>

                                                <InputForm content={"Current Location"} identifier={"currentlocation"} formData={formData} onChangeData={handleChange} placeholder={"Enter Your Current Location"} />

                                                <div className='pt-4'>
                                                    <input className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-11" type='text' name='preferedlocation' id='preferedlocation' value={formData.preferedlocation} onChange={handleChange} placeholder='Enter Your Prefered Location' required />
                                                    <div id="preferedLocation" className=" form-text pb-3 text-light">Prefered Location</div>
                                                </div>
                                            </div>
                                        }

                                        {/* 2 */}
                                       {stage === 3 &&
                                            <div className='p-3'>

                                                <div className='pt-4'>
                                                    {/* <p className='text-start pt-2'>Qualification : </p> */}
                                                    <input className="text-light border border-0 border-bottom bg-transparent col-12" type='text' name='qualification' id='qualification' value={formData.qualification} onChange={handleChange} placeholder='Enter Your Qualification' required />
                                                    <div id="preferedLocation" className=" form-text pb-3 text-light">Qualification</div>
                                                </div>

                                                <div className='pt-4'>
                                                    {/* <p className='text-start pt-2'>Qualification : </p> */}
                                                    <input className="text-light border border-0 border-bottom bg-transparent col-12" type='text' name='yearofpassing' id='yearofpassing' value={formData.yearofpassing} onChange={handleChange} placeholder='Enter Year of Passing' required />
                                                    <div id="preferedLocation" className=" form-text pb-3 text-light">Year of Passing</div>
                                                </div>


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
                                            (experience === 1 &&
                                                <Experience formData={formData} handleChange={handleChange} name={"College"} placeholder={"Enter Your College Name"} />

                                                // <div>
                                                //     <div className='pt-4'>
                                                //         <input className="text-light border border-0 border-bottom bg-transparent col-12" type='text' name='clgproject' id='clgproject' value={formData.clgproject} onChange={handleChange} placeholder='Enter Your College Project Name' required />
                                                //         <div id="preferedLocation" className=" form-text pb-3 text-light">College Main Project</div>
                                                //     </div>
                                                //     <div className='pt-4'>
                                                //         <input className="text-light border border-0 border-bottom bg-transparent col-12" type='text' name='projectskills' id='projectskills' value={formData.projectskills} onChange={handleChange} placeholder='Enter Learned Skills' required />
                                                //         <div id="preferedLocation" className=" form-text pb-3 text-light">Skills Learned from the Project</div>
                                                //     </div>
                                                //     <div className='pt-4'>
                                                //         <input className="text-light border border-0 border-bottom bg-transparent col-12" type='text' name='projecturl' id='projecturl' value={formData.projecturl} onChange={handleChange} placeholder='Enter Your Project URL' required />
                                                //         <div id="preferedLocation" className=" form-text pb-3 text-light">Project Link If any</div>
                                                //     </div>
                                                //     <div className='pt-4'>
                                                //         <input className="text-light border border-0 border-bottom bg-transparent col-12" type='text' name='otherskills' id='otherskills' value={formData.otherskills} onChange={handleChange} placeholder='Enter Other Skills You Have' required />
                                                //         <div id="preferedLocation" className=" form-text pb-3 text-light">Other Skills Learned in College</div>
                                                //     </div>
                                                // </div>
                                            )
                                        }

                                        {stage === 4 &&
                                            (experience === 2 &&
                                            <Experience formData={formData} handleChange={handleChange} name={"Company"} />
                                            )
                                        }


                                        {/* 3 */}
                                       {stage === 5 &&
                                            <div className='p-3'>
                                                <div className='pt-4'>
                                                    {/* <p className='text-start pt-2'>LinkedIn URL : </p> */}
                                                    <input className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-11" type='text' name='linkedin' id='linkedin' value={formData.linkedin} onChange={handleChange} placeholder='Enter Your LinkedIn URL' required />
                                                    <div id="preferedLocation" className=" form-text pb-3 text-light">LinkedIn URL</div>
                                                </div>

                                                <div className='pt-4'>
                                                    {/* <p className='text-start pt-2'>Personal Website URL : </p> */}
                                                    <input className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-11" type='text' name='personalsite' id='personalsite' value={formData.personalsite} onChange={handleChange} placeholder='Enter Your Personal Site URL' required />
                                                    <div id="preferedLocation" className=" form-text pb-3 text-light">Personal Site URL</div>
                                                </div>

                                                <div className='pt-4'>
                                                    {/* <p className='text-start pt-2'>Other Social Media URL : </p> */}
                                                    <input className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-11" type='text' name='socialmedia' id='socialmedia' value={formData.socialmedia} onChange={handleChange} placeholder='Enter Your Socialmedia URL' />
                                                    <div id="preferedLocation" className=" form-text pb-3 text-light">Socialmedia URL</div>
                                                </div>

                                            </div>
                                        }

                                        {/* 4 */}
                                        {stage === 6 && 
                                            <div className='p-3'>
                                                <div className='pt-4'>
                                                    {/* <p className='text-start pt-2'>Language Known : </p> */}
                                                    <input className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-11" type='text' name='language' id='language' value={formData.language} onChange={handleChange} placeholder='Prefered Language for Commuication ' required />
                                                    <div id="preferedLocation" className=" form-text pb-3 text-light">Language Known</div>
                                                </div>

                                                <div className='pt-4'>
                                                    {/* <p className='text-start pt-2'> Attach Document <i className="bi bi-paperclip"></i> : </p> */}
                                                    <input className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-11 btn" type='file' name='document' id='document' placeholder='' accept='.doc, .pdf, .docx' required />
                                                    <div id="preferedLocation" className=" form-text pb-3 text-light">Attach Resume  <i className="bi bi-paperclip"></i> </div>
                                                </div>

                                                <div className='pt-4'>
                                                    {/* <p className='text-start pt-2'>How Fun You Are ? : </p> */}
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

//  <form action="" method="">
//  <select name="theItems" onchange="otherSelect()">
//  <option value="item1">Item One</option>
//  <option value="item2">Item Two</option>
//  <option value="item3">Item Three</option>
//  <option value="other">Other</option> 

//  </select>
 
//  <div id="otherBox" style="visibility: hidden;">
//  Describe: <input name="otherField" type="text" /> 
//  </div>
//  </form>
 
//  <script type="text/javascript">
//  function otherSelect() {
//  var other = document.getElementById("otherBox");
//  var pick = document.forms[0].theItems.options[document.forms[0].theItems.selectedIndex].value;
//  if ( pick == "other" || pick == "item2" ) { other.style.visibility = "visible"; }
//  else { other.style.visibility = "hidden"; }
//  }
//  </script>


// const [inputFields, setInputFields] = useState([{
//     fullName: '',
// }]);

// const addInputField = () => {
//     setInputFields([...inputFields, {
//         fullName: '',
//     }])

// }
// const removeInputFields = (index) => {
//     const rows = [...inputFields];
//     rows.splice(index, 1);
//     setInputFields(rows);
// }
// const handleChange = (index, evnt) => {

//     const { name, value } = evnt.target;
//     const list = [...inputFields];
//     list[index][name] = value;
//     setInputFields(list);



// }
// return (

//     <div className="container">
//         <div className="row">
//             <div className="col-sm-8">
//                 {
//                     inputFields.map((data, index) => {
//                         const { fullName, emailAddress, salary } = data;
//                         return (
//                             <div className="row my-3" key={index}>
//                                 <div className="col">
//                                     <div className="form-group">
//                                         <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={fullName} name="fullName" className="form-control" placeholder="Full Name" />
//                                     </div>
//                                 </div>

//                                 <div className="col">


//                                     {(inputFields.length !== 1) ? <button className="btn btn-outline-danger" onClick={removeInputFields}>x</button> : ''}


//                                 </div>
//                             </div>
//                         )
//                     })
//                 }

//                 <div className="row">
//                     <div className="col-sm-12">
//                         <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="col-sm-4">
//         </div>
//     </div>

// )