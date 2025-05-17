import React from 'react'
import { ErrorMessage, Field } from 'formik'

function Input({ label, name, classname, divclass, form_group, ...rest }) {
    return (
        <div className={divclass}>
            <label htmlFor={name}>{label}</label>
            
            {form_group ? (
                <div className="input-group">
                    <Field id={name} name={name} {...rest} className={classname} />
                    {form_group}
                </div>
            ) : (
                <Field id={name} name={name} {...rest} className={classname} />
            )}
            <ErrorMessage name={name} component="div" className="error" />
        </div>
    )
}

export default Input
