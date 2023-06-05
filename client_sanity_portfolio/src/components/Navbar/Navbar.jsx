import { useState } from 'react';
import './Navbar.scss';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';
import { CgMenuRight } from 'react-icons/cg'
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  
  return (
    <nav className='app__navbar app__flex'>
      <motion.div
        initial={{ x: 0, opacity: 0, scale: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className='app__logo-wrap'
      >
        <h1>
          <img src={logo} alt="logo" />
        </h1>
      </motion.div>
      <ul className='app_lists app__list-style app__flex app__links__full__screen'>
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(link => {
          return (
            <li key={link}>
              <div className='app__link-dot' />
              <a className='app__links' href={`#${link}`}>{link}</a>
            </li>
          )
        })}
      </ul>

      <div>
        <div className='toggle__menu__open'>
          <CgMenuRight onClick={() => setToggle(toggle => !toggle)} />
        </div>

        {toggle && (
          <motion.div
            className='app__links__responsive__screen'
            animate={{
              right: toggle && 0
            }}
            transition={{
              duration: 0.5,
              type: 'linear',
              ease: 'easeInOut'
            }}
          >
            <FaTimes className='toggle__menu__close' onClick={() => setToggle(toggle => !toggle)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact', 'testimonials', 'experience'].map(link => {
                return (
                  <li key={link} className='app__list-style'>
                    <a className='app__links' href={`#${link}`} onClick={() => setToggle(toggle => !toggle)}>{link}</a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;