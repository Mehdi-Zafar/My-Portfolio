import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return ( 
        <footer className="mt-16 py-4 shadow-lg shadow-white ">
            <div className="flex justify-around flex-col mx-auto w-64 sm:flex-row sm:items-center sm:w-full">
                <div className='m-3 '>
                    <h3 className="text-sm mb-4">Call</h3>
                    <a className="text-lg mt-4" href="tel:+923330236076">+923330236076</a>
                </div>
                <div className="m-3">
                    <h3 className="text-sm mb-4">Email</h3>
                    <a className="text-lg mt-4" href="mailto:mehdizaffar0@gmail.com">mehdizaffar0@gmail.com</a>
                </div>
                <div className="m-3">
                    <h3 className="text-sm mb-4">Address</h3>
                    <a className="text-lg mt-4" href="https://www.google.com/maps/place/Karachi,+Karachi+City,+Sindh,+Pakistan/" target="_blank">Karachi, Pakistan</a>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <div className="flex mx-4">
                    <a className="mx-2 p-3 border rounded-full text-xl hover:bg-white hover:text-blue-900" href="https://github.com/Mehdi-Zafar" target="_blank"><BsGithub/></a>
                    <a className="mx-2 p-3 border rounded-full text-xl hover:bg-white hover:text-blue-900" href="https://www.linkedin.com/in/mehdi-zafar-9a910522a/" target="_blank"><FaLinkedinIn/></a>
                    <a className="mx-2 p-3 border rounded-full text-xl hover:bg-white hover:text-blue-900" href="https://www.instagram.com/mehdizaffar/" target="_blank"><BsInstagram/></a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;