import { ErrorMessage, Field } from 'formik'
import React from 'react'

function Textarea({ label, name, classname, divclass, ...rest }) {
    return (
        <div className={divclass}>
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" id={name} name={name} {...rest} className={classname} />
            <ErrorMessage name={name} component="div" className="error" />
        </div>
    )
}

export default Textarea
