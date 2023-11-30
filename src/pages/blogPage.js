import React from "react";
import '../style/index.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {FaUser, FaCalendar} from "react-icons/fa";

export default function BlogPage(){
    return(
        <>
            <Navbar/>
            <div className="px-4 mt-24 md:px-32">
                <img src="" className="w-full h-96 object-cover rounded-lg mt-4"/>
                <p className="text-3xl font-bold mt-4">Cara Memakan Kerang</p>
                <div className="flex gap-5 flex-wrap text-gray-400 mt-3">
                    <div className="flex items-center">
                        <FaUser className="text-black"/>
                        <p>&nbsp;Fitra Ramadhan &nbsp;</p>
                    </div>
                    <div className="flex items-center">
                        <FaCalendar className="text-black"/>
                        <p>&nbsp;21 November 2023</p>
                    </div>
                </div>
                <hr className="mt-4"></hr>
                <div className="mt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer. Sed cras ornare arcu dui vivamus. Risus feugiat in ante metus dictum at tempor. Vitae sapien pellentesque habitant morbi. A arcu cursus vitae congue mauris rhoncus aenean. Libero justo laoreet sit amet cursus sit amet dictum. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Elit ut aliquam purus sit amet luctus venenatis. Tristique senectus et netus et malesuada. Sed vulputate mi sit amet mauris commodo quis imperdiet. Tempor nec feugiat nisl pretium. Quis ipsum suspendisse ultrices gravida. Auctor urna nunc id cursus metus aliquam eleifend mi. Diam maecenas sed enim ut sem viverra aliquet eget. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Euismod quis viverra nibh cras pulvinar mattis nunc. Ut faucibus pulvinar elementum integer enim neque.
                    Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Diam maecenas ultricies mi eget mauris. Malesuada fames ac turpis egestas integer eget aliquet nibh. Nunc mattis enim ut tellus elementum sagittis. Cras semper auctor neque vitae. Elementum pulvinar etiam non quam lacus. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Id diam vel quam elementum pulvinar etiam non quam. Ultrices sagittis orci a scelerisque purus semper. Vel risus commodo viverra maecenas accumsan. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vitae tortor condimentum lacinia quis vel. Morbi leo urna molestie at elementum eu. In est ante in nibh mauris cursus mattis molestie. Dignissim cras tincidunt lobortis feugiat. Luctus venenatis lectus magna fringilla urna porttitor.
                    Nisl tincidunt eget nullam non nisi est. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ut diam quam nulla porttitor massa id neque aliquam. Molestie nunc non blandit massa enim nec dui nunc. Etiam erat velit scelerisque in dictum. Tristique sollicitudin nibh sit amet. Tortor posuere ac ut consequat semper viverra nam. Sociis natoque penatibus et magnis. Scelerisque fermentum dui faucibus in. Volutpat consequat mauris nunc congue. Aliquam faucibus purus in massa tempor.
                    Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Sem integer vitae justo eget magna. Mauris sit amet massa vitae tortor condimentum lacinia. Lacus viverra vitae congue eu. In cursus turpis massa tincidunt dui ut. Ac turpis egestas integer eget. Neque viverra justo nec ultrices dui sapien eget mi proin. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Velit scelerisque in dictum non consectetur a erat nam. Massa sapien faucibus et molestie ac. Amet aliquam id diam maecenas ultricies. Nunc sed velit dignissim sodales ut eu sem. Amet risus nullam eget felis eget nunc. Id diam maecenas ultricies mi. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Vivamus arcu felis bibendum ut tristique et. Aliquam id diam maecenas ultricies. Neque vitae tempus quam pellentesque. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio.
                </div>

            </div>
            <Footer/>
        </>
    );
}