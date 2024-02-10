import React from "react";
import Header from "./Header";
// import RegisterForm from "./RegisterForm"

function Welcome()
{
    // const [register, setRegister] = useState(false);

    // const handleRegister = () => {
    //     setRegister(true);
    // }

    return (
        <>
            <Header name={"Drop CV"} path={"/registerform"} />
            <div className="pt-5 px-3 ">
                <div className="d-flex justify-content-end">
                    <h2 className="px-4 py-2 bg-warning text-dark rounded-start-pill text-center">
                        Welcom to EVVI <i> ELECT </i>
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Welcome;