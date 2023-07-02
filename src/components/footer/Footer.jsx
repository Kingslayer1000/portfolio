/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Snivellus</a>
      <ul className='permalinks'>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#services'>Education</a></li>        
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/neel-sharma-6a5370214/"><FaLinkedin /></a>
        <a href="https://twitter.com/eyeNeelSharma"><FaTwitter /></a>
        <a href="https://github.com/Kingslayer1000"><FaGithub /></a>  
        <a href="https://leetcode.com/snivellus7/"><SiLeetcode/></a>       
      </div>
      <div className="footer_copyright">
        <small>&copy; Snivellus Portfolio. Made with ❤️ by Neel.</small>
      </div>
    </footer>
  )
}

export default Footer