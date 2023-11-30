import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import ReactQuill from "react-quill";
import {FaFile} from "react-icons/fa";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {initializeApp} from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AddEventPage(){

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const firebaseConfig = {
        apiKey: "AIzaSyBAKJHnv6Xj8t2AVS1-NQQ45_irjJndgEY",
        authDomain: "letsgo-blog.firebaseapp.com",
        databaseURL: "https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "letsgo-blog",
        storageBucket: "letsgo-blog.appspot.com",
        messagingSenderId: "695890164378",
        appId: "1:695890164378:web:75605a365fca7b46eefd23"
    };

    const app = initializeApp(firebaseConfig);
    const storage = getStorage();

    async function submitBlog(e){
        e.preventDefault();
        if(title === "" || desc === "" || file === null) {
            setErrorMessage("Please Fill In All Fields");
            return;
        }else{
            const storageRef = ref(storage, `images/${file.name}`);
            const snapshot = await uploadBytes(storageRef, file);
            const url = await getDownloadURL(snapshot.ref);
            console.log('Uploaded a blob or file!', url);

            fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/event.json', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    desc: desc,
                    image: url,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }}
            )
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.href = "/";
            })
        }
    }
    const changeTitle = (e) => {
        setTitle(e.target.value);
        console.log(sessionStorage.getItem("username"));
    }
    const changeDesc = (e) => {
        setDesc(e);
    }
    const changeFile = (e) => {
        setFile(e.target.files[0]);
    }

    if(sessionStorage.getItem("username") === null){
        window.location.href = "/login";
        return null;
    }else{
        return(
            <>
                <Navbar/>
                <div className="w-full px-4 mt-8 md:px-32">
                    <div className="w-full flex flex-col items-center">
                        <h1 className="text-3xl font-bold text-slate-400 py-6">Tambah Event</h1>
                        <form className="w-full relative flex flex-col gap-4" onSubmit={submitBlog}>
                            <div>
                                <p className="text-left">Title</p>
                                <input type="text" onChange={changeTitle} value={title} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>   
                            </div>
                            <div>
                                <p className="text-left">Description</p>
                                <ReactQuill theme="snow" onChange={changeDesc} value={desc} className="ql-container ql-snow"/>
                            </div>
                            <div>
                                <p className="text-left">Image</p>
                                <label className={`w-full flex flex-col items-center px-4 py-6 ${file === null ? 'bg-white text-blue' : 'bg-blue-300 text-white'} rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer`}>
                                    <FaFile/>
                                    <span className="mt-2 text-base leading-normal">Upload Your File</span>
                                    <input type='file' className="hidden" onChange={changeFile}/>
                                </label>
                            </div>
                            {
                                errorMessage ? (
                                    <p className="text-red-500 text-center">{errorMessage}</p>
                                ) : (null)
                            
                            }
                            <button type="submit" className="py-2 px-8 mb-4 bg-blue-500 text-white self-center  rounded-md">Upload</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
    
}