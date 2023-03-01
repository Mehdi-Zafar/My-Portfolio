import {BsBriefcase,BsLinkedin,BsGithub, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-scroll';

const Header = () => {
    return ( 
        <nav className="shadow-lg shadow-white">
            <div className="flex justify-between items-center ">
            <div>
                <h1 className="flex items-center tracking-wider text-2xl m-3"><BsBriefcase/>&nbsp;Portfolio</h1>
            </div>
            <div className="hidden md:flex">
                <Link className="m-0 py-6 px-4 hover:bg-indigo-900" spy={true} smooth={false} offset={-50} duration={500} to="about">About</Link>
                <Link className="m-0 py-6 px-4 hover:bg-indigo-900" spy={true} smooth={false} offset={-50} duration={500} to="education">Education</Link>
                <Link className="m-0 py-6 px-4 hover:bg-indigo-900" spy={true} smooth={false} offset={-50} duration={500} to="projects">Projects</Link>
                <Link className="m-0 py-6 px-4 hover:bg-indigo-900" spy={true} smooth={true} offset={-50} duration={500} to="technologies">Technologies</Link>
            </div>
            <div className="flex mx-3">
                <a className="mx-2 text-xl duration-100 hover:scale-110" href="https://github.com/Mehdi-Zafar" target="_blank"><BsGithub/></a>
                <a className="mx-2 text-xl duration-100 hover:scale-110" href="https://www.linkedin.com/in/mehdi-zafar-9a910522a/" target="_blank"><BsLinkedin/></a>
                <a className="mx-2 text-xl duration-100 hover:scale-110" href="https://www.instagram.com/mehdizaffar/" target="_blank"><BsInstagram/></a>
            </div>
            </div>
            <div className="flex justify-evenly text-sm md:hidden">
                <Link className="m-0 py-6 px-2 hover:bg-indigo-900" spy={true} smooth={false} offset={-50} duration={500} to="about">About</Link>
                <Link className="m-0 py-6 px-2 hover:bg-indigo-900" spy={true} smooth={false} offset={-50} duration={500} to="education">Education</Link>
                <Link className="m-0 py-6 px-2 hover:bg-indigo-900" spy={true} smooth={false} offset={-50} duration={500} to="projects">Projects</Link>
                <Link className="m-0 py-6 px-2 hover:bg-indigo-900" spy={true} smooth={true} offset={-50} duration={500} to="technologies">Technologies</Link>
            </div>
        </nav>
     );
}
 
export default Header;