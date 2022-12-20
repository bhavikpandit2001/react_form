import React, { useState } from "react";
import { useForm } from "react-hook-form";

const F = () => {
  const { register, handleSubmit, formState : { errors } } = useForm()
  const [userInfo, setUserinfo] = useState()
  const Register = (data) => {
    setUserinfo(data);
    console.log(data);
  }
  console.log(errors)
  return (
    <div>
    <h1> react js form validation using react form hook </h1>
    <div>{ JSON.stringify(userInfo, undefined, 2)}</div>
      <form>
        <div>
          <label>firstname:</label>
          <input type="firstname" name="firstname" placeholder="firstname" {...register("firstname",{required:"firstname is required", pattern:{value:/[a-z]{1,10}/, message:"pls enter valid firtsname"}})}></input>
        </div>
        {errors.firstname && <div style={{color: "red"}}>{errors.firstname.message}</div>}
        <div>
          <label>lastname:</label>
          <input type="lastname" name="lastname" placeholder="lastname" {...register("lastname", {required:"lastname is required", pattern:{value:/[a-z]{1,10}/, message:"pls enter valid lastname"}})}></input>
        </div>
        {errors.lastname && <div style={{color: "red"}}>{errors.lastname.message}</div>}
        <div>
          <label>email:</label>
          <input type="email" name="email" placeholder="email" {...register("email", {required:"email is required", pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message:"pls enter valid email address"}})}></input>
        </div>
        {errors.email && <div style={{color: "red"}}>{errors.email.message}</div>}
        <div>
          <label>password:</label>
          <input type="password" name="password" placeholder="password" {...register("password", {required:"password is required", pattern:{value:/^[A-Za-z]\w{7,14}$/, message:"pls enter valid password"}})}></input>
        </div>
        {errors.password && <div style={{color: "red"}}>{errors.password.message}</div>}
        <button type="button" onClick={handleSubmit(Register)}>Register</button>
      </form>
    </div>
  )
}
export default F;