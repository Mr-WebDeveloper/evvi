import React from "react";

function InputForm({...props}){

    console.log(props);

    // const [content, identifier, formData, onchangeData, placeholder] = props
    const content = props.content;
    const identifier = props.identifier;
    const formData = props.formData;
    const onchangeData = props.onchangeData;
    const placeholder = props.placeholder;
    const value = props.value;

    return (
        <>
            <div>
                <div className='pt-4'>
                    <input className="text-light border border-0 border-bottom bg-transparent col-12" type='text' name={identifier} id={identifier} value={value} onChange={onchangeData} placeholder={placeholder} required />
                    <div className="form-text pb-3 text-light">{content}</div>
                </div>
            </div>
        </>

    );
}

export default InputForm;