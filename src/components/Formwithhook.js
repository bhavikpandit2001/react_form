import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const API = "https://jsonplaceholder.typicode.com"

const Formwithhook = () => {
    const [userInfo, setUserinfo] = useState()
    const [user, setUser] = useState([])
    const [isError, setIsError] = useState("")

    const { register, handleSubmit, formState: { errors } } = useForm()
    const Submit = (data) => {
        setUserinfo(data)
        console.log(data)
        console.log(errors)
    }
    
    const GetUser = async (url) => {
        try {
            const res = await axios.get(url)
            setUser(res.data)
            
        } catch (error) {
            setIsError(error.message)
            console.log(error)
        }

    }
    useEffect(() => {
        GetUser(`${API}/users`)
        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => {
        //         setUser(res.data)

        //     }).catch((error) => {
        //         setIsError(error.message)
        //         console.log(error)
        //     })
    })

    
    return (
        <div>
            <h2>Form with form-hook library</h2>
            {isError !== "" && <h3>{isError}</h3>}


            <div>{JSON.stringify(userInfo, undefined, 2)}</div>
            <form >
                <div>
                    <label>username: </label>
                    <input type="text"
                        name="username"
                        placeholder="username"
                        {...register("username", { required: "username is required" })}>
                    </input>
                </div>
                {errors.username && <div style={{ color: "red" }}>{errors.username.message}</div>}
                <div>
                    <label>email: </label>
                    <input type="text"
                        name="email"
                        placeholder="email"
                        {...register("email", { required: "email is required", pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "please enter valid email" } })}>
                    </input>
                </div>
                {errors.email && <div style={{ color: "red" }}>{errors.email.message}</div>}
                <div>
                    <label>password: </label>
                    <input type="password"
                        name="password"
                        placeholder="password"
                        {...register("password", { required: "password is required", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, message: "please enter valid password" } })}>
                    </input>
                </div>
                {errors.password
                    && <div style={{ color: "red" }}>{errors.password.message}</div>}
                <button type="button" onClick={handleSubmit(Submit)}>Register</button>
            </form>
            {user.slice(0, 5).map((users) => {
                const { id, name, username, email } = users;
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <h4>{username}</h4>
                        <h4>{email}</h4>
                    </div>
                )
            })}
        </div>
    )
}
export default Formwithhook;