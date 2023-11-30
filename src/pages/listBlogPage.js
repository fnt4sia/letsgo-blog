import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function listBlogPage(){
    return(
        <>
            <Navbar/>
            <div className="w-full h-60 mt-16 px-3">
                <div className="b w-full h-full">
                    <div className="w-full h-2/3">
                        <img className="w-full object-cover h-full" src="https://media.nature.com/lw767/magazine-assets/d41586-023-03711-1/d41586-023-03711-1_26352646.jpg?as=webp"></img>
                    </div>
                    <h3 className="w-full mt-2 text-lg font-bold">8 Rekomendasi Tempat Wisata Di Yogyakarta !</h3>
                </div>
            </div>
            <Footer/>
        </>

    )
}