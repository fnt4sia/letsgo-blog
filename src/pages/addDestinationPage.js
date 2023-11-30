import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function AddDestinationPage(){
    const [value, setValue] = useState(0);
    const addImage = () => {
        if(value === 5){
            console.log("Max 6 images");
        }else{
            setValue(value + 1);
        }
    }
    const arrayCheckbox = ["Wisata Alam", "Wisata Kota", "Wisata Kuliner", "Wisata Sejarah", "Wisata Religi", "Wisata Edukasi"];
    return(
        <>
          <Navbar/>
            <div className="w-full px-4 mt-8 md:px-32">
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-slate-400 py-6">Tambah Destination</h1>
                    <form className="w-full relative flex flex-col gap-4">
                        <div>
                            <p className="text-left font-bold">Title</p>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>   
                        </div>
                        <div>
                            <p className="text-left font-bold">Description</p>
                            <ReactQuill theme="snow" value={value} className="ql-container ql-snow"/>
                        </div>
                        <div className="md:flex justify-evenly">
                            <div className="flex flex-col mt-5 md:mt-0">
                                <p className="text-left font-bold">Image</p>
                                {
                                    Array.from({ length: value }).map((_, index) => (
                                        <input key={index} type="file" className="w-full mt-2" />
                                        ))
                                    }
                                <input type="file" className="w-full mt-2"></input>
                                <p className="mt-3 w-fit p-0.5 rounded-md bg-blue-300 grid place-items-center cursor-pointer text-sm" onClick={addImage}>Add More Image</p>
                            </div>
                            <div className="md:px-8 mt-10 md:mt-0">
                                <p className="text-left font-bold">Tag</p>
                                {arrayCheckbox.map((item, index) => (
                                    <div>
                                        <input type="checkbox" value={item} key={index} className="mr-2"/>
                                        <label>{item}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button type="submit" className="py-2 px-8 bg-blue-500 self-center text-white rounded-md">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}