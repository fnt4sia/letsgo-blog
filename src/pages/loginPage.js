import React from "react";
import { FaUser, FaLock, FaUnlock } from 'react-icons/fa';
import "../style/index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordLook, setPasswordLook] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const onChangeUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    }
    const onChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    }
    const iconPassword = () => {
        setPasswordLook(!passwordLook);
    }

    async function loginSubmit(e){
        e.preventDefault();
        if(username === "" || password === "") {
            setErrorMessage("Please fill in all fields");
            return;
        }else{
            const response = await fetch(`https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/users/${username}.json`);
            const data = await response.json();
            if(data === null) {
                setErrorMessage("Username does not exist");
                return;
            }else{
                const key = Object.keys(data)[0];
                console.log(data[`${key}`]['password']);
                if(data[`${key}`]['password'] !== password) {
                    setErrorMessage("Password is incorrect");
                    return;
                }else{
                    sessionStorage.setItem("username", username);
                    window.location.href = "/";
                } 
            }
        }
        
    }

    return(
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded shadow-lg w-80">
                <h1 className="text-4xl font-bold text-center">LetsGo</h1>
                <form onSubmit={loginSubmit} className="flex flex-col gap-2 mt-6 items-center">
                    <div className="relative w-full">
                        <input type="text" placeholder="Username" value={username} onChange={onChangeUsername} className="border-2 border-gray-200 rounded-md p-2 w-full" />
                        <FaUser className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <div className="relative w-full">
                        <input type={passwordLook ? 'password' : 'text'} placeholder="Password" value={password} onChange={onChangePassword} className="border-2 border-gray-200 rounded-md p-2 w-full" />
                        {
                            passwordLook ? <FaLock className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 cursor-pointer" onClick={iconPassword}/> : <FaUnlock className=" cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400" onClick={iconPassword}/>
                        }
                    </div>
                  
                    <p className="w-full text-right text-sm text-blue-500">Forgot Password?</p>
                    {
                        errorMessage !== "" ? <p className="text-red-500 mt-2 text-center">{errorMessage}</p> : null
                    }
                    <button className="bg-slate-400 rounded py-3 px-16 text-white mt-4">LOGIN</button>
                </form>
                <div className="text-center mt-6">
                    <span className="text-sm">Don't have an account? </span>
                    <Link to={'/register'} className="text-blue-500">SIGN UP</Link>
                </div>
                <p className="text-center">OR</p>
                <div className="justify-center mt-4 flex gap-4">
                    <div className="flex items-center">
                        <img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19753.png" width={30} height={30} className="object-contain"></img>
                        <p>Facebook</p>
                    </div>
                    <div className="flex items-center">
                        <img src="http://pngimg.com/uploads/google/google_PNG19635.png" width={30} height={30} className="object-contain"></img>
                        <p>Google</p>
                    </div>
                </div>

            </div>
        </div>
    );
}