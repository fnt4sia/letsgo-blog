import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import ReactQuill from "react-quill";
import {FaFile} from "react-icons/fa";
import 'react-quill/dist/quill.snow.css';

export default function AddBlogPage(){
    const value = 'edit me';
    return(
        <>
            <Navbar/>
            <div className="w-full px-4 mt-8 md:px-32">
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-slate-400 py-6">Tambah Blog</h1>
                    <form className="w-full relative flex flex-col gap-4">
                        <div>
                            <p className="text-left">Title</p>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>   
                        </div>
                        <div>
                            <p className="text-left">Description</p>
                            <ReactQuill theme="snow" value={value} className="ql-container ql-snow"/>
                        </div>
                        <div>
                            <p className="text-left">Image</p>
                            <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-300 hover:text-white">
                                <FaFile/>
                                <span className="mt-2 text-base leading-normal">Upload Your File</span>
                                <input type='file' className="hidden" />
                            </label>
                        </div>
                        <button type="submit" className="py-2 px-8 bg-blue-500 self-center text-white rounded-md">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}