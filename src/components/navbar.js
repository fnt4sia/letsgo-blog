import React from 'react';
import '../style/index.css';

export default function Navbar () {
    return(
        <nav className="fixed w-screen h-10 flex justify-between before:w-full before:h-full before:absolute before:bg-slate-400 before:-z-10">
            <h1 className="self-center">LetsGo-Blog</h1>
            <div className="flex gap-2">
                <div className="relative flex justify-center items-center gap-2" >
                    <a href="" className="">wisata</a>
                    <span className="material-symbols-outlined ease-in-out duration-200" onclick="dropdown(this)">
                        expand_more
                    </span>
                    <div className="absolute top-full bg-gray-200 p-4 ease-in-out duration-200 -translate-y-full -z-20">
                        <a href="">alam</a>
                        <a href="">kota</a>
                        <a href="">budaya</a>
                        <a href="">event</a>
                    </div>
                </div>
                <a href="">komunitas</a>
                <a href="">akun</a>
            </div>
        </nav>
    );
}
