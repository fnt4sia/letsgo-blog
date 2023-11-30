import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {Link} from 'react-router-dom';
import {  useEffect, useState } from "react";

export default function ListBlogPage(){

    const[blogData, setBlogData] = useState([]);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    useEffect(() => {
        fetch('https://letsgo-blog-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json')
        .then((response) => response.json())
        .then((data) => {
            const blogArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key]
            }));
            setBlogData(blogArray);
        })
    }, [])

    return(
        <>
            <Navbar/>
            <div className="w-full min-h-60 mt-10 md:mt-20 px-3 md:px-16">
                {   
                    blogData && shuffle([...blogData]).map((item, index) => {
                        if (index === 0) {
                            return (
                                <Link to={`/blog/${item.id}`} className="b w-full h-full bg-black relative group">
                                    <div className="w-full h-2/3 overflow-hidden">      
                                        <img className="w-full object-cover aspect-video max-h-96 group-hover:scale-105 group-hover:opacity-70 ease-in-out duration-200" src={item.image}></img>
                                    </div>
                                    <h3 className="absolute w-full  text-lg font-bold px-3 md:p-5 md:px-7 bottom-3 text-white md:text-2xl text-center ease-in-out duration-200 group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:text-2xl group-hover:md:text-4xl">{item.title}</h3>
                                </Link>
                            )
                        }
                    })
                }   
            </div>

            <Link to='/addBlog'>
            <div class="fixed bottom-5 md:bottom-8 right-5 md:right-8 bg-blue-400 h-10 w-10 md:h-14 md:w-14 grid place-items-center rounded-lg text-3xl font-bold">+</div>
            </Link>

            <div className="w-full px-3 mt-6 lg:mt-12 md:px-16 flex gap-3 lg:gap-10 flex-wrap">
                {
                    blogData && [...blogData].reverse().map((item) => (
                        <Link to={`/blog/${item.id}`} className="w-full lg:w-2/5 grow flex gap-4 md:gap-10 bg-gray-200 rounded-md group">
                            <div className="flex-shrink flex-grow basis-2/3 p-2 flex flex-col gap-3 md:justify-between md:p-5">
                                <h1 className="font-bold leading-6 sm:line-clamp-3 sm:text-ellipsis">{item.title}</h1>
                                <p className="hidden font-light text-xs sm:line-clamp-3 sm:text-ellipsis" dangerouslySetInnerHTML={{__html: item.desc }}></p>
                                <div>
                                    <p className="text-xs">{item.author}</p>
                                    <p className="text-xs">{item.date}</p>
                                </div>
                            </div>
                            <div className="flex-shrink flex-grow basis-1/3 sm:max-h-52 overflow-hidden">
                                <img src={item.image} className="rounded-r-md h-full object-cover w-full group-hover:scale-105 ease-in-out duration-200"></img>
                            </div>
                        </Link>
                    ))
                }
            </div>
            
            <Footer/>
        </>

    )
}