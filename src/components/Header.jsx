import {BsBriefcase,BsLinkedin,BsGithub, BsInstagram} from 'react-icons/bs'

const Header = () => {
    return ( 
        <nav className="shadow-lg shadow-white">
            <div className="flex justify-between items-center ">
            <div>
                <h1 className="flex items-center tracking-wider text-2xl m-3"><BsBriefcase/>&nbsp;Portfolio</h1>
            </div>
            <div className="hidden md:flex">
                <a  className="m-0 py-6 px-4 hover:bg-indigo-900"href="#about">About</a>
                <a className="m-0 py-6 px-4 hover:bg-indigo-900" href="#education">Education</a>
                <a  className="m-0 py-6 px-4 hover:bg-indigo-900"href="#projects">Projects</a>
                <a  className="m-0 py-6 px-4 hover:bg-indigo-900"href="#technologies">Technologies</a>
            </div>
            <div className="flex mx-3">
                <a className="mx-2 text-xl" href="https://github.com/Mehdi-Zafar" target="_blank"><BsGithub/></a>
                <a className="mx-2 text-xl" href="https://www.linkedin.com/in/mehdi-zafar-9a910522a/" target="_blank"><BsLinkedin/></a>
                <a className="mx-2 text-xl" href="https://www.instagram.com/mehdizaffar/" target="_blank"><BsInstagram/></a>
            </div>
            </div>
            <div className="flex justify-evenly text-sm md:hidden">
                <a  className="m-0 py-6 px-2 hover:bg-indigo-900"href="#about">About</a>
                <a className="m-0 py-6 px-2 hover:bg-indigo-900" href="#education">Education</a>
                <a  className="m-0 py-6 px-2 hover:bg-indigo-900"href="#projects">Projects</a>
                <a  className="m-0 py-6 px-2 hover:bg-indigo-900"href="#technologies">Technologies</a>
            </div>
        </nav>
     );
}
 
export default Header;