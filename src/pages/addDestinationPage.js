import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { FaFile } from "react-icons/fa";
import {initializeApp} from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Footer from "../components/footer";


export default function AddDestinationPage(){
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState([]);;
    const [tag, setTag] = useState([]);
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

    async function submitForm(e){
        e.preventDefault();
        if(title === "" || desc === "" || tag.length === 0) {
            setErrorMessage("Please Fill In All Fields");
            return;
        }else if(file.length < 6){
            setErrorMessage("Please Upload 6 Images");
            return;
        }else{
            const urls = [];
            for (const item of file) {
                const storageRef = ref(storage, `destination/${item.name}`);
                const snapshot = await uploadBytes(storageRef, item);
                const url = await getDownloadURL(snapshot.ref);
                urls.push(url);
            }

            fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/destination.json', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    desc: desc,
                    image: urls,
                    tag: tag,
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
    }
    const changeDesc = (e) => {
        setDesc(e);
    }
    const changeFile = (e) => {
        setFile(e.target.files);
        console.log(file);
    };
    const changeTag = (e) => {
        setTag(oldTag => [...oldTag, e.target.value]);
        console.log(tag);
    }
    const arrayCheckbox = ["Wisata Alam", "Wisata Kota", "Wisata Sejarah", "Wisata Religi", "Wisata Edukasi", "Event Unik"];

    if(sessionStorage.getItem("username") === null || sessionStorage.getItem("username") !== "fitra"){
        window.location.href = "/login";
        return null;
    }else{
        return(
            <>
              <Navbar/>
                <div className="w-full px-4 mt-8 md:px-32">
                    <div className="w-full flex flex-col items-center">
                        <h1 className="text-3xl font-bold text-slate-400 py-6">Tambah Destination</h1>
                        <form onSubmit={submitForm} className="w-full relative flex flex-col gap-4">
                            <div>
                                <p className="text-left font-bold">Title</p>
                                <input type="text" onChange={changeTitle} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>   
                            </div>
                            <div>
                                <p className="text-left font-bold">Description</p>
                                <ReactQuill theme="snow" onChange={changeDesc} className="ql-container ql-snow"/>
                            </div>
                            <div className="flex flex-col mt-10 w-4/5 m-auto ">
                                <p className="text-center font-bold">Image</p>
                                <label className={`w-full flex flex-col items-center px-4 py-2 ${file.length === 0 ? 'bg-white text-blue' : 'bg-blue-300 text-white'} rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer`}>
                                    <FaFile/>
                                    <span className="mt-2 text-base leading-normal">Upload Your File</span>
                                    <input type='file' className="hidden" onChange={changeFile} multiple/>
                                </label>
                            </div>


                                <p className="mt-5 text-center font-bold">Tag</p>
                                <div className="md:px-8 m-auto w-4/5 flex flex-wrap">
                                    {arrayCheckbox.map((item, index) => (
                                        <div className="basis-1/2 lg:translate-x-1/3">
                                            <input type="checkbox" value={item} key={index} className="mr-2" onChange={changeTag}/>
                                            <label>{item}</label>
                                        </div>
                                    ))}
                                </div>
                            
                            {
                                errorMessage ? (
                                    <p className="text-red-500 text-center">{errorMessage}</p>
                                ) : (null)
                            }
                            <button type="submit" className="py-2 px-8 bg-blue-500 self-center text-white rounded-md mb-2">Submit</button>
                        </form>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
    
}