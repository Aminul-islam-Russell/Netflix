
import React, { useState } from 'react'
import { GiHamburgerMenu} from "react-icons/gi";
import { FcCalendar } from "react-icons/fc"
import { HiUser } from "react-icons/hi"
import { Menus } from './Menus'
import { Link } from "react-router-dom";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const menuBerger = () => {
        setMobileMenu(!mobileMenu)
    }
  return (
    <section className='mix-blend-multiply bg-gradient-to-r from-indigo-500 to-purple-500  via-lime-300 relative sticky top-0 z-50 '>
        <div className='container m-auto md:w-5/6 w-full max-auto pt-5 pb-7 px-2'>
            <div className='flex justify-between items-center'>
            <div className='w-40'>
            <a href='/'className="font-semi text-2xl font-['playfair display',sherif] ">Parabot</a>
            </div>
            <div className='hidden md:block top-[100%]'>
                <ul className='flex md:flex-row flex-col md:gap-10 gap-3 menu '>
                    {Menus?.map((menu, index) => (
                        <li key={index}>
                    <a href={menu?.link} className='font-semi'>{menu?.name}</a>
                   </li>
                    )) }
                   


                </ul>
            </div>
            <div className=''>
                <ul className='flex gap-6'>
                <li>
                    <Link to='/'className='text-xl '><FcCalendar /></Link>
                   </li>
                   <li>
                    <Link to='/'className='text-xl'><HiUser /></Link>

                   </li>
                   <li onClick={() => menuBerger()} className="md:hidden block">
                    <GiHamburgerMenu />
                   </li>


                </ul>
            </div>
            </div>
        </div>

 {
    mobileMenu &&
    <div className='hidden md:block '>
                <ul className='flex md:flex-row flex-col md:gap-10 gap-3 menu '>
                {Menus?.map((menu, index) => (
                        <li key={index}>
                    <link to={menu?.link} className='font-semi'>{menu?.name}</link>
                   </li>
                    )) }


                </ul>
            </div>
 }



        
    </section>
  )
}

export default Header