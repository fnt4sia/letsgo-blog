import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AccountPage(){
    if(sessionStorage.getItem("username") === null){
        window.location.href = "/login";
        return null;    
    }else{
        return(
            <>
                <Navbar/>
                <Footer/>
            </>
        )
    }

}