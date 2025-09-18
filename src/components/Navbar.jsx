import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from "../assets/Jashandeep.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/jashandeep-singh-a2897824a/"
          target = "_blank"
         rel = "noopener noreferrer"
         aria-label="LinkedIn" >
          <FaLinkedin/>
        </a>
         <a href="https://github.com/1Jashandeepsingh"
          target = "_blank"
         rel = "noopener noreferrer"
         aria-label="GitHub" >
         <FaGithub/>
        </a>
         <a href="https://www.instagram.com/the_coder7861/"
          target = "_blank"
         rel = "noopener noreferrer"
         aria-label="Instagram" >
          <FaInstagram/>
        </a>
         <a href="https://x.com/Honey1573276"
          target = "_blank"
         rel = "noopener noreferrer"
         aria-label="Twitter" >
          <FaTwitter/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
