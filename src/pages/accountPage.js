import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { VscAccount } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";

export default function AccountPage(){

    const {name} = useParams();
    const[blogData, setBlogData] = useState([]);
    const[userExist, setUserExist] = useState(false);

    useEffect(() => {
        fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/users/'+name+'.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data === null){
                setUserExist(false);
            }else{
                setUserExist(true);
            }
        })
    }, [])

    useEffect(() => {
        fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json')
        .then((response) => response.json())
        .then((data) => {
            const blogArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key]
            }));
            setBlogData(blogArray);
            console.log(blogData);
        })
    }, [])

    if(!userExist){
        return(
            <>
                <Navbar/>
                <div className="w-full min-h-60 mt-10 md:mt-20 px-3 md:px-16">
                    <h1 className="text-4xl text-center min-h-screen">User Not Found</h1>
                </div>
                <Footer/>
            </>
        )
    }else{
        return(
            <>
                <Navbar/>
                <div className="mt-10 p-10 flex flex-col">
                    <div className="flex gap-10 items-center lg:self-center">
                        <div className="">
                            <VscAccount className="text-7xl"/>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold">{name}</h3>
                            {
                                sessionStorage.getItem('username') === name ? (
                                    <Link to='/logout'><button className="bg-gray-200 w-fit p-0.5 py-2 px-4 rounded-md mt-1">logout</button></Link>
                                ) : (
                                    <button className="bg-gray-200 w-fit p-0.5 py-2 px-4 rounded-md mt-1">follow</button>
                                )
                            }
                        </div>
                    </div>
    
                    <h3 className="text-2xl mt-10 lg:text-center">Acticle Posted</h3>
                            
                    <div className="w-full px-3 mt-6 lg:mt-12 md:px-16 flex gap-3 lg:gap-10 flex-wrap">
                        {
                            blogData && [...blogData].reverse().map((item) => {
                                if(item.user === name) return(
                                <div className="w-full lg:w-2/5 grow flex gap-4 md:gap-10 bg-gray-200 rounded-md group">
                                    <div className="flex-shrink flex-grow basis-2/3 p-2 flex flex-col gap-3 md:justify-between md:p-5">
                                        <h1 className="font-bold leading-6 sm:line-clamp-3 sm:text-ellipsis">{item.title}</h1>
                                        <p className="hidden font-light text-xs sm:line-clamp-3 sm:text-ellipsis" dangerouslySetInnerHTML={{__html:item.desc}}></p>
                                        <div>
                                            <p className="text-xs">{item.user}</p>
                                            <p className="text-xs">{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink flex-grow basis-1/3 sm:max-h-56 overflow-hidden">
                                        <img src={item.image} className="rounded-r-md h-full object-cover w-full group-hover:scale-105 ease-in-out duration-200"></img>
                                    </div>
                                </div>
                            )})
                        }
                    </div>
    
                </div>
                <Footer/>
            </>
        )
    
    }
    
}