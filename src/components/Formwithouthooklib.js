import React, { useState, useEffect } from "react";
const Form = () => {
    const initialValues = { username: "", email: "", password: "" }
    const [FormValue, setFormValues] = useState(initialValues)
    const [formerrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const handleLogin = () => {
        // console.log(FormValue)
        setFormErrors(Validate(FormValue))
        setIsSubmit(true)

    }
    useEffect(() => {
        console.log(formerrors)
        if (Object.keys(formerrors).length === 0 && isSubmit) {
            console.log(FormValue)
        }
    }, [formerrors])
    const Validate = (values) => {
        const errors = {};
        const regexmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regexpwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!values.username) {
            errors.username = "Username is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regexmail.test(values.email)) {
            errors.email = " please enter valid email ";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (!regexpwd.test(values.password)) {
            errors.password = " please enter valid password ";
        }
        return errors
    }
    return (
        <div>
            <h1>Form validation </h1>
            {Object.keys(formerrors).length === 0 && isSubmit ? (<div>sign in successfully</div>) : (<div>{JSON.stringify(FormValue, undefined, 2)}</div>)}

            <form >
                <div>
                    <label>User name:</label>
                    <input type="text" name="username" placeholder="username" value={FormValue.username} onChange={(e) => setFormValues({ ...FormValue, username: e.target.value })} />
                </div>
                <p> {formerrors.username} </p>
                <div>
                    <label>Email Id:</label>
                    <input type="email" name="email" placeholder="email" value={FormValue.email} onChange={(e) => setFormValues({ ...FormValue, email: e.target.value })} />
                </div>
                <p> {formerrors.email} </p>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="password" value={FormValue.password} onChange={(e) => setFormValues({ ...FormValue, password: e.target.value })} />
                </div>
                <p> {formerrors.password} </p>
                <button type="button" onClick={handleLogin}> logIn </button>
            </form>
        </div>
    )
}
export default Form; 