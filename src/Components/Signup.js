import React from "react";
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


    return (
        <>
            <Header name={"Dashboard"} path={"/"} />
            <div className="contaier-fluid pb-lg-5 pb-2">
                <div className="p-3 p-lg-5">
                    <div className="d-flex justify-content-center">
                        <div className="col-4 rounded-4 d-flex justify-content-center" style={{ backgroundImage: `url(${background})`}}>
                            <div className="py-5">
                                <form action="http://localhost:4000/signup" method="post" >
                                    <div>
                                        <p className="text-light" >Email address</p>
                                        <input type="email" class="form-control" id="email" name="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"  required />
                                        <div id="emailHelp" class="form-text pb-3 text-secondary">Enter Your Email ID</div>
                                    </div>
                                    <div>
                                        <p className="text-light text-secondary" >Password</p>
                                        <input type="password" class="form-control" id="password" pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g" name="password" required />
                                        <div id="emailHelp" class="form-text pb-3 text-secondary">Enter Your Password</div>
                                    </div>
                                    <div>
                                        <p className="text-light" >Confirm Password</p>
                                        <input type="password" class="form-control" id="confirm_password" pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g" name="confirmpassword" required />
                                        <div id="emailHelp" class="form-text pb-3 text-secondary">Re-Type Password</div>
                                    </div>
                                    <div>
                                        <p className="text-light" >Mobile Number</p>
                                        <input type="text" class="form-control" id="mobilenumber" maxlength={10} name="mobilenumber" required />
                                        <div id="emailHelp" class="form-text pb-3 text-secondary">10-Digit Mobile Number</div>
                                    </div>
                                    {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                                    <div className="text-center pt-3">
                                        <button type="submit" class="btn btn-warning rounded-pill">Sigin</button>
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