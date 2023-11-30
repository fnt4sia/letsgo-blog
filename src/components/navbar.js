import React from 'react';
import '../style/index.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Navbar () {
    const[clicked, setDropdown] = useState(false);
    const handleClick = () => {
        if(clicked === true){
            setDropdownWisata(false);
        }
        setDropdown(!clicked);
    }
    const[wisataDrop, setDropdownWisata] = useState(false);
    const handleClickWisata = () => {
        setDropdownWisata(!wisataDrop);
    }

    return(
        <nav className="fixed top-0 w-screen h-10 flex justify-between items-center bg-slate-400 z-50">
            <Link to={'/'}><h1 className="self-center py-2 px-6 text-lg font-semibold cursor-pointer">LetsGo Blog</h1></Link>
            <p className='sm:hidden py-2 px-6 cursor-pointer z-50' onClick={handleClick}>KLIK</p>
            {clicked ? (
            <div className={`absolute top-full left-0 w-full px-8 duration-500 opacity-1 translate-y-0 sm:hidden`}>
                <div className={`flex flex-col w-full items-center gap-3 rounded-xl py-6 text-white font-bold`} style={{backgroundColor: '#3A3053'}}>
                <ul className='text-center'>
                    <li className='py-2'>
                        <p onClick={handleClickWisata} className='cursor-pointer'>Wisata</p>
                        {wisataDrop ? (
                            <ul className='text-center opacity-1 duration-500 max-h-28 text-sm'>
                                <li className='py-1 font-light cursor-pointer'>Pantai</li>
                                <li className='py-1 font-light cursor-pointer'>Gunung</li>
                                <li className='py-1 font-light cursor-pointer'>Air Terjun</li>
                            </ul>
                        ) : (
                            <ul className='text-center opacity-0 duration-500 max-h-0 text-sm'>
                                <li className='py-1 font-light'>Pantai</li>
                                <li className='py-1 font-light'>Gunung</li>
                                <li className='py-1 font-light'>Air Terjun</li>
                            </ul>
                        )}
                    </li>
                    <Link to='/community'><li className='py-2 cursor-pointer'>Komunitas</li></Link>
                    <Link to='/account'><li className='py-2 cursor-pointer'>Akun</li></Link>
                </ul>
                <hr className='w-3/4'></hr>
                <ul className='text-center'>
                    <Link to='/login'><li className='py-2 cursor-pointer'>Login</li></Link>
                    <Link to='/register'><li className='py-2 cursor-pointer'>Sign Up</li></Link>
                </ul>
                </div>
            </div>
            ) : (
            <div className={`absolute top-full left-0 w-full px-8 duration-500 opacity-0 -translate-y-full sm:hidden -z-50`}>
                <div className={`relative flex flex-col w-full items-center gap-3 rounded-xl py-6 text-white font-bold -z-50`} style={{backgroundColor: '#3A3053'}}>
                <ul className='text-center'>
                    <li className='py-2'>
                        <p onClick={handleClickWisata} className='cursor-none'>Wisata</p>
                        {wisataDrop ? (
                            <ul className='text-center opacity-1 duration-500 max-h-28 text-sm cursor-none'>
                                <li className='py-1 font-light'>Pantai</li>
                                <li className='py-1 font-light'>Gunung</li>
                                <li className='py-1 font-light'>Air Terjun</li>
                            </ul>
                        ) : (
                            <ul className='text-center opacity-0 duration-500 max-h-0 text-sm cursor-none'>
                                <li className='py-1 font-light'>Pantai</li>
                                <li className='py-1 font-light'>Gunung</li>
                                <li className='py-1 font-light'>Air Terjun</li>
                            </ul>
                        )}
                    </li>
                    <li className='py-2 cursor-none'>Komunitas</li>
                    <li className='py-2 cursor-none'>Akun</li>
                </ul>
                <hr className='w-3/4'></hr>
                <ul className='text-center'>
                    <li className='py-2 cursor-none'>Login</li>
                    <li className='py-2 cursor-none'>Sign Up</li>
                </ul>
                </div>
            </div>
            )}
            <ul className='hidden sm:flex items-center text-base font-semibold px-6 py-2 gap-8 justify-center'>
                <li className='relative'>
                    <p onClick={handleClickWisata} className="z-50 cursor-pointer">Wisata</p>
                    {wisataDrop ? (                  
                    <ul className='text-center absolute top-full text-sm opacity-1 duration-300 cursor-pointer translate-y-0 -z-10'>
                        <li className='py-1 font-light cursor-pointer'>Pantai</li>
                        <li className='py-1 font-light cursor-pointer'>Gunung</li>
                        <li className='py-1 font-light cursor-pointer'>Air Terjun</li>
                    </ul>) 
                    : (
                        <ul className='text-center absolute top-full text-sm opacity-0 duration-300 -translate-y-1/2 -z-10'>
                        <li className='py-1 font-light'>Pantai</li>
                        <li className='py-1 font-light'>Gunung</li>
                        <li className='py-1 font-light'>Air Terjun</li>
                    </ul>
                    )}
  
                </li>
                <Link to='/community'><li className='cursor-pointer'>Komunitas</li></Link>
                <Link to='/account'><li className='cursor-pointer'>Akun</li></Link>
            </ul>
        </nav>
    );
}
