import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import background from '../assets/images/home.jpeg'
import Header from "./Header";

// import background from '../assets/images/background6.png'
// import TextField from '@mui/material/TextField';

function Signup() {

    // useEffect(() => {
    //     document.body.style.backgroundImage = `url(${background})`;
    //     document.body.style.backgroundSize = "cover";
    //     return () => {
    //         document.body.style.backgroundImage = 'none';
    //     };
    // }, []);




    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmpassword: "",
        mobilenumber: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSignup = async (event) =>{
        console.log(event.target);
        event.preventDefault();

        
        if (formData.email !== "" && formData.password !== "" && formData.mobilenumber !== "" && formData.password === formData.confirmpassword)
        {
            console.log("Signup");
            await axios.post("http://localhost:5000/signup", formData)
                .then((res) => {
                    if(res.status === 201)
                    {
                        const email = res.data;
                        console.log(res.data);
                        
                        alert(`Welcome ${email}, SignUp Successfull, Register to Continue`);
                        navigate('/registerform', {
                            state: formData
                        });
                    }
                    else if(res.status === 250)
                    {
                        alert("Data Not Stored...SignUp Correctly");  
                        setFormData({
                            email: "",
                            password: "",
                            confirmpassword: "",
                            mobilenumber: ""
                        });
                    }

                })

        }
        else
        {
            alert("Enter Valid Credentials...");
        }

    }


    return (
        <>
            <Header name={"Login"} path={"/login"} icon={"bi bi-box-arrow-in-right"}/>
            <div className="contaier-fluid pb-lg-5 pb-2">
                <div className="p-3 p-lg-5">
                    <div className="d-flex justify-content-center pb-5 pb-lg-1">
                        <div className="col-lg-5 col-12 col-md-6 rounded-4 d-flex justify-content-center" style={{ backgroundImage: `url(${background})`}}>
                            <div className="py-5 px-lg-4 px-2 text-light" >

                                <form encType="multipart/form-data" onSubmit={handleSignup} >
                                    <h3>SignUp</h3>
                                    <hr />
                                    {/* <div>
                                        <p className="text-light" >Enter Full Name :</p>
                                        <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} />
                                        <div id="Name" className="form-text pb-3 text-secondary">Enter Your Full Name</div>
                                    </div> */}

                                    <div className="pt-5">
                                        {/* <p className="text-light" >Email address</p> */}
                                        <input type="email" className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-11" autocomplete="off" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email"  />
                                        <div id="emailHelp" className=" form-text pb-3 text-secondary">Email ID</div>
                                    </div>
                                    <div className="d-lg-flex pt-4">
                                        <div className="px-1">
                                            {/* <p className="text-light text-secondary" >Password</p> */}
                                            <input type="password" className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-10" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter Your Password"  />
                                            <div id="emailHelp" className="form-text pb-3 text-secondary">Password</div>
                                        </div>
                                        <div className="px-1 pt-4 pt-lg-0">
                                            {/* <p className="text-light" >Confirm Password</p> */}
                                            <input type="password" className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-10" id="confirm_password" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} placeholder="Re-Type Password" />
                                            <div id="emailHelp" className="form-text pb-3 text-secondary">Confirm Password</div>
                                        </div>
                                    </div>
                                    {/* <div>
                                    </div> */}
                                    <div className="pt-4">
                                        {/* <p className="text-light" >Mobile Number</p> */}
                                        <input type="text" className="text-light border border-0 border-bottom bg-transparent col-12 col-lg-11" id="mobilenumber" maxLength={10} name="mobilenumber" autocomplete="off" value={formData.mobilenumber} onChange={handleChange} placeholder="Enter Your Mobile Number" />
                                        <div id="emailHelp" className="form-text pb-3 text-secondary">Mobile Number</div>
                                    </div>
                                    {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                                    <div className="text-center pt-3">
                                        <button type="submit" className="btn btn-warning rounded-pill px-4">SignUp</button>
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

export default Signup;