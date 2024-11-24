
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import { useState } from 'react';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const navigate = useNavigate();
  const toggleMenu = () => 
  {
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = () =>
  {
    setIsMenuOpen(false);
  }
  const navItems =
[ 
  {
    link: 'Home',
    path: 'hero'
  },
  {
    link: 'About',
    path: 'about'
  },
  {
    link: 'Services',
    path: 'services'
  },
  {
    link: 'Projects',
    path: 'projects'
  },
  {
    link: 'Contact',
    path: 'contact'
  },
]
  return (
    <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6
         py-4 sticky top-0 z-50'>
          
      <h2 className='text-black md:text-3xl text-2xl font-bold font-rubik'>Sahil <span className='text-yellow-500 italic'>Construction</span></h2>

      <ul className='lg:flex justify-center items-center gap-6 hidden ml-[18%]'>
        {navItems.map(({link, path}) => 
        (
            <Link key={path} className='text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]'
                  to={path} spy={true} offset={100} smooth={true}>{link}</Link>  
        ))}


<button className='bg-yellow-500 hover:bg-black hover:text-red-600 text-black px-10 py-3 rounded-full font-semibold transform hover:scale-105
              transition-transform duration-300 cursor-pointer md:flex hidden'>Reach Us</button>
      </ul>

      {/* mobile menu starts here */}
      <div 
        className='flex justify-between items-center lg:hidden mt-3'
        onClick={toggleMenu}
      >
        <div>
            {
            isMenuOpen ? <FaXmark className='text-yellow-500 text-3xl cursor-pointer' /> 
            :
            <FaBars className='text-yellow-500 text-3xl cursor-pointer' /> 
            }
        </div>
      </div>
      
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-yellow-500
        p-4 absolute top-[72px] left-0`} onClick={closeMenu}>

          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
              {navItems.map(({link, path}) =>
              (
                <Link key={path} className='text-black uppercase font-semibold 
                cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
              ))}
          </ul>

      </div>

      <button onClick={() => navigate('/login')} className='bg-yellow-500 hover:bg-black hover:text-red-600 text-black px-10 py-3 rounded-full font-semibold transform hover:scale-105
              transition-transform duration-300 cursor-pointer md:flex hidden'>Login</button>
    </nav>
  )
}

export default Header