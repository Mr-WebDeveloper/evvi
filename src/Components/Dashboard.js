import React, { useEffect } from 'react';
import background from '../assets/images/background6.png'
import Header from './Header';

function Dashboard() {

    useEffect(() => {
        document.body.style.backgroundImage = `url(${background})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = 'no-repeat'
        
        return () => {
            document.body.style.backgroundImage = 'none';
        };
    }, []);




    return (
        <>
            <Header name={"login"} path={"/login"} />  

            <div className='pt-lg-5'>
                <div className='p-5 d-flex justify-content-center'>
                    <div className='bg-dark text-light rounded-3 shadow col-5 dashboard'>
                        <h1 className='p-4'>YOUR HR PARTNER IN.</h1>
                        <h1 className='px-4'>EVERY ASPECT</h1>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>

    );
}

export default Dashboard;