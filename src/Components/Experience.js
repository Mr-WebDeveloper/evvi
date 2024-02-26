import React from 'react'

function Experience({...props}){
    console.log(props);
    const name = props.name;
    const placeholder = props.placeholder;
    return (
    <>
        <div>
            <div className='pt-4'>
                <input className="text-light border border-0 border-bottom bg-transparent col-12" type='text' name='orgname' id='orgname' value={props.formData.orgname} onChange={props.handleChange} placeholder={placeholder} required />
                <div id="preferedLocation" className=" form-text pb-3 text-light">Previous {name} Name</div>
            </div>
            <div className='pt-4'>
                <input className="text-light border border-0 border-bottom bg-transparent col-12" type='text' name='projects' id='projects' value={props.formData.projects} onChange={props.handleChange} placeholder='Enter Project Name' required />
                <div id="preferedLocation" className=" form-text pb-3 text-light">Previous Projects</div>
            </div>
            <div className='pt-4'>
                <input className="text-light border border-0 border-bottom bg-transparent col-12" type='text' name='projectskills' id='projectskills' value={props.formData.projectskills} onChange={props.handleChange} placeholder='Enter Your Skills' required />
                <div id="preferedLocation" className=" form-text pb-3 text-light">Skills Learned in Project</div>
            </div>
            <div className='pt-4'>
                <input className="text-light border border-0 border-bottom bg-transparent col-12" type='text' name='projecturl' id='projecturl' value={props.formData.projecturl} onChange={props.handleChange} placeholder='Enter Project hosted URL' required />
                <div id="preferedLocation" className=" form-text pb-3 text-light">Project URL if any ?</div>
            </div>
            <div className='pt-4'>
                <input className="text-light border border-0 border-bottom bg-transparent col-12" type='text' name='otherskills' id='otherskills' value={props.formData.otherskills} onChange={props.handleChange} placeholder='Additional Skills' required />
                <div id="preferedLocation" className=" form-text pb-3 text-light">Any Other Skills</div>
            </div>
        </div>

    </>
    );
}

export default Experience;