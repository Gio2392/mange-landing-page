import { useEffect, useState } from 'react';
import { NavItem } from '../components';
import {menuItems} from '../data';
import './navbar.css';

import { Button } from '../components';


const logoUrl = 'images/logo.svg';
const menuUrl = 'images/icon-hamburger.svg';
const closeUrl = 'images/icon-close.svg';




export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [navFixed, setnavFixed] = useState(false)

  const handlerToggle = () => {
      setIsOpen(!isOpen);
  }


  useEffect(()=> {

    const navScroll = (e) => {
      if(window.scrollY > 150){
        setnavFixed(true)
      }else{
        setnavFixed(false)
      }
    }

    document.addEventListener('scroll', navScroll)

    return () => {
      document.removeEventListener('scroll', navScroll)
    }
  },[])

  return (
   <>
       {/* {
         isOpen && <div className="overlay"></div>
       } */}
      <div className={`navbar ${navFixed ? 'navbar-active' : ''}`}>
       <nav className='container nav'>
         <div className="nav__logo">
           <img src={logoUrl} alt="company logo" />
         </div>
         
           <div className={`nav__links ${isOpen ? 'nav__links-active' : ''}`}>
            <div className="nav__collapse">
              <ul>
                {
                  menuItems.map( (item, index) => (
                    <NavItem key={index} item={item} setIsOpen={setIsOpen} />
                  ))
                }
              </ul>
            </div>
           </div>

           <Button text='Get Started' color='orange' />
         
         <div className="nav__toggle" onClick={handlerToggle}>
           <button>
             <img src={!isOpen ? menuUrl : closeUrl} alt="toggle menu" />
           </button>
         </div>
       </nav>
     </div>
   </>
  )
}
