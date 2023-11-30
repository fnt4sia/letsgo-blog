import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function AddBlogPage(){
    const value = 'a';
    return(
        <>
            <Navbar/>
            <div className="w-full px-4 mt-8">
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-slate-400 py-6">Tambah Blog</h1>
                    <form className="w-full relative z-20">
                        <p className="text-left">Title</p>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>   
                        <p className="text-left">Description</p>
                        <ReactQuill theme="snow" value={value} className="ql-container ql-snow"/>
                        <p className="text-left">Image</p>
                        <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 4a2 2 0 00-2 2v4a2 2 0 002 2 2 2 0 002-2V6a2 2 0 00-2-2zm0 12a6 6 0 100-12 6 6 0 000 12z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal">Select a file</span>
                        <input type='file' className="hidden" />
                        </label>
                    </form>
                </div>
            </div>
        </>
    );
}