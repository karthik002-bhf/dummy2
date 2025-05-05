import React from 'react'
import { ErrorMessage, Field } from 'formik'

function Input({ label, name, classname, divclass, ...rest }) {
    return (
        <div className={divclass}>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} className={classname} />
            <ErrorMessage name={name} component="div" className="error" />
        </div>
    )
}

export default Input
