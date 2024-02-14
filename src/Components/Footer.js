import React from 'react';

function Footer() {
    return (
        <div className="bg-dark container-fluid fixed-bottom">
            <div className='d-flex justify-content-around pt-3 text-light'>
                <h5> 
                    <i className="px-2 bi bi-instagram"></i>
                    <i className="px-2 bi bi-linkedin"></i>
                    <i className="px-2 bi bi-twitter"></i>
                </h5>
                <p> <i className="bi bi-c-circle"></i> Copyright 2024 </p>
                <h5>
                    <i className="bi bi-envelope-at"></i>
                </h5>
            </div>
        </div>
    );

}

export default Footer;