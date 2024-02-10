import React from "react";
import background from '../assets/images/home.jpeg'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";



function Login() {
    // useEffect(() => {
    //     document.body.style.backgroundImage = `url(${background})`;
    //     document.body.style.backgroundSize = "cover";
    //     return () => {
    //         document.body.style.backgroundImage = 'none';
    //     };
    // }, []);





    const navigate = useNavigate();


    const signUp = () => {
        navigate('/signup');
    };



    return (
        <>

            <Header name={"Dashboard"} path={"/"} /> 
                <div className="container-fluid pb-lg-5 pb-2">
                    <div className="p-3 p-lg-5">k
                        <div className="d-flex justify-content-center">
                        <div className=" col-4 rounded-4 d-flex justify-content-center" style={{ backgroundImage: `url(${background})` }}>
                                <div className="py-5 text-light">
                                    <form method="get" action="http://localhost:4000/login">
                                        <h3>Login</h3>
                                        <hr />
                                        <p>Email address</p>
                                        <input type="email" className="form-control" id="email" name="email" />
                                        <div className="form-text pb-3 text-secondary">We'll never share your email with anyone else.</div>
                                        <p>Password</p>
                                        <input type="password" className="form-control" id="password" name="password" />
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
