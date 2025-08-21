import React from 'react';
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {

    return(
        <>
            <div className="icons2">
                 <FaGithub /> <BiLogoGmail /> <FaLinkedin /> <FaInstagram />
            </div>
        </>
    )
}

export default Footer;
