import React, { useState } from 'react'
import AuthLayout from '../../components/layout/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/inputs/Input';
import "../../index.css"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);
  const navigate = useNavigate();


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  //Handle Login Form Submit
  const handleLogin  = async (e) =>{
    e.preventDefault();
    if(!validateEmail(email)){
      setError("Please enter a valid email address");
      return;
    }

    if(password.length < 8 || !password){
      setError("Password must be at least 8 characters long");
      return;
    }


    setError("");

    //login API call can be added here
  }
  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6' >
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <Input value={email} 
          onChange={({target})=>setEmail(target.value)} 
          label="Email"
          placeholder='john@example.com'
          type='text'
          />

          <Input value={password} 
          onChange={({target})=>setPassword(target.value)} 
          label="Password"
          placeholder='Min 8 Characters'
          type='password'
          />

          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
          <button type='submit' className='btn-primary'>LOGIN</button>

        <p className='text-[15px] text-slate-800 mt-3'>
          Don't have an account?{" "}
          <Link className="font-medium text-blue-600 underline" to="/signup">
          SignUp
          </Link>
        </p>
        </form>

      </div>
    </AuthLayout>
  )
}

export default Login
