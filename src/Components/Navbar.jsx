import React from 'react'
import { useState } from 'react';
import { AiOutlineClose ,AiOutlineMenu} from 'react-icons/ai';
export const Navbar = () => {

    const [nav, setNav] = useState(false);
    // //function is responsib le for toggling the navigation 
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className=' ml-auto mt-[-1%] mx-auto h-[100px] max-w-[1200px] bg-[#28282B] text-[beige] flex justify-between items-center'>
            <h1 className='font-bold text-3xl ml-4'>Jamal Veve</h1>
            <ul className='hidden md:flex ' >
                <li className='p-5' ><a href='#About'>About</a></li>
                <li className='p-5'><a href='#Work'>Work</a></li>
                <li className='p-5'><a href='#Contact'>Contact</a></li>

            </ul>

            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose/>: <AiOutlineMenu/>}
            </div>

            <div className={nav ? 'text-[violet] left-0 fixed w-[60%] h-full bg-[#28282B] ease-in-out duration-500 flex flex-col justify-center'
                : 'fixed left-[-100%]'}>
                <h1 className='ml-[8%] mt-[30%]'>Jamal Veve</h1>
                <ul className=' text-2xl text-[violet]'>
                    <li className='p-2 '><a href='#About'>About</a></li>
                    <li className='p-2' ><a href='#Work'>Work</a></li>
                    <li className='p-2 '><a href='#Contact'>Contact</a></li>
                </ul>
            </div>





        </div>

    )


}


