import React from "react";
import styles from "./FormControls.module.css";
import { Field } from "redux-form";


export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched &&meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError &&<span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched &&meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError &&<span>{meta.error}</span>}
        </div>
    )
}
export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
   <Field className="form-control form-control-lg" validate = {validators} name={name}
    component = {component}
    {...props}
    />{text}
    </div>
)