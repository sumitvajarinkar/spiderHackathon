import React,{useState} from 'react';
import '../styles/auth.css';
import { Link } from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import {useForm} from 'react-hook-form'
import Spinner from '../components/Spinner'

const Signup = () => {
    const [isLoading,setLoading]=useState(false)
    
    //form validation
    let schema = yup.object().shape({
        name:yup.string().required("Please Enter your Name"),
        email:yup.string().required("Please Enter your Email").email(),
        password:yup.string().required("Please Enter your password")
        .test(
            "regex",
            "Password must be min 6 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase",
          val => {
            let regExp = new RegExp(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/
            )
            return regExp.test(val);
       })   

    })
  

    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema),
    })
// console.log(errors)
 
    const submitHandler=(data)=>{
        
        console.log(data.email,data.password)
        setLoading(true)
    }

   

    return (
        <div className='auth'>
            <div className="form">
                <div className="logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/4039/4039232.png" alt="" />
                </div>
                
                
                <form onSubmit={handleSubmit(submitHandler)}>
                <input type="text" name='name' placeholder='Name' {...register('name', { required: true })} />
                    {errors?.name?.message&&<p className="err">{errors?.name?.message}</p>}
                    <input type="email" name='email' placeholder='Email' {...register('email', { required: true })} />
                    {errors?.email?.message&&<p className="err">{errors?.email?.message}</p>}
                    <input type="password" name="password" id="" placeholder='Password' {...register('password', { required: true })} />
                    {errors?.password?.message&&<p className="err">{errors?.password?.message}</p>}
                    <div className="text">
                      <Link to="/updatepassword">  <p>Forget Password?</p></Link>
                    </div>
                    <button type="submit">{isLoading? <Spinner/>:'Register'}</button>
                </form>
                <div className="forget">
                 <p>Alreday a user?</p> <Link to="/signin">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
