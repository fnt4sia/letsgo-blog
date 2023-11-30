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
                    <form className="w-full">
                        <p className="text-left">Title</p>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title"/>
                        <p className="text-left">Description</p>
                        <ReactQuill theme="snow" value={value} className="g"/>
                    </form>
                </div>
            </div>
        </>
    );
}