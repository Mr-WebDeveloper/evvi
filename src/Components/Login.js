import React, { useState } from "react";
import axios from 'axios';
import background from '../assets/images/home.jpeg'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";



function Login(...props) {


    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };



    const signUp = () => {
        navigate('/signup');
    };



    const handleLogin = async (event) => {
        event.preventDefault();

            // console.log("Loin");
            // console.log(formData.email);
            // console.log(formData.password);

            if(formData.email !== "" && formData.password !== "")
            {
                await axios.post("http://localhost:5000/login", formData).then((res) => {
                    // console.log(res);
                    // console.log(res.status);
                    if (res.status === 201) {
                        // alert("Valid User..!");

                        navigate('/welcome',{
                            state: formData
                        });
                    } else {
                        alert("Don't have account, Sinup");
                        navigate('/signup');
                    }
                }).catch((err) => {
                    console.log(err);
                    return
                });
            }
            else 
            {
                alert("Not a Valid User..!");
                navigate('/login');
            }
            
            // await axios.post("http://localhost:5000/login", formData).then((res) => {
            //     // console.log(res);
            //     // console.log(res.status);
            //     if (res.status === 201) {
            //         navigate('/welcome');
            //     } else {
            //         navigate('/signup');
            //     }
            // }).catch((err) => {
            //     console.log(err);
            //     return
            // });
            
            console.log("Login-2");


    }



    return (
        <>
            {/* bi bi-house-door
            bi bi-power */}

            <Header name={"Home"} path={"/"} icon={'bi bi-house-door'} /> 
                <div className="container-fluid pb-lg-5 pb-2">
                    <div className="p-2 p-lg-3 p-lg-5">
                    <div className="d-flex justify-content-center pb-5 pb-lg-1">
                        <div className="col-lg-4 col-12 col-md-6  rounded-4 d-flex justify-content-center" style={{ backgroundImage: `url(${background})` }}>
                            <div className="py-5 px-lg-4 px-2 text-light">

                                    <form encType="multipart/form-data" onSubmit={handleLogin}>
                                        <h3>Login</h3>
                                        <hr />
                                        <p>Email address</p>
                                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='eg: Yourmail@gmail.com' />
                                        <div className="form-text pb-3 text-secondary">We'll never share your email with anyone else.</div>
                                        <p>Password</p>
                                        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter Your Password' />
                                        <div className="form-text p-2 text-secondary">Your password must be at least 8 characters</div>

                                         <p className="text-light btn" onClick={signUp} href="">Sign Up</p>

                                        <div className="text-center pt-3">
                                            <button type="submit" className="btn btn-warning rounded-pill">Submit</button>
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

export default Login;
