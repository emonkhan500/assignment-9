import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Login = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    
    },[])
    const {googleSignIn,signIn}= useContext( AuthContext)
    const location= useLocation()
    const navigate=useNavigate()
    const handleGoogleSignIn= (media)=>{
        media()
        .then(res=>console.log(res.user))
        .catch( error=>console.error(error))
            }
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        // if(password.length < 6){
        //     toast.error("Password mus have 6 character");
        //     return;
        // }
        // else if(!/[A-Z]/.test(password)){
        //     toast.error("Need one capital later");
        //     return;
        // }
        // else if(/[\W_]/.test(password)){
        //     toast.error('Need special character');
        //     return;
        // }
        

        signIn(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : "/");

            })
            .catch(err => {
                console.error(err);

            })
    }
    return (
        <div data-aos = "flip-up" className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-6">
                
                <button onClick={()=>{handleGoogleSignIn(googleSignIn)}} className="btn btn-primary" >sign in with Google</button>
              </div>
      </form>
      <p className='text-center'>NEW? <Link to="/register"><button className='btn btn-link' > Register</button></Link>  </p>
    </div>
    <ToastContainer></ToastContainer>
  </div>
</div>
    );
};

export default Login;