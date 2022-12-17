import image from '../assets/hero_image.jpg'
import {ImHtmlFive} from 'react-icons/im'
import {SiJavascript,SiCss3} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'

const Hero = () => {
    return ( 
        <div className="hero flex justify-evenly items-center flex-col sm:flex-row">
            <div>
                <h1 className="text-3xl text-center m-2 sm:text-5xl">Hello World!</h1>
                <h3 className="text-lg m-2 sm:text-2xl">I am a Frontend Web Developer!</h3>
                <div className="flex justify-evenly text-3xl m-1">
                    <ImHtmlFive/>
                    <SiCss3/>
                    <SiJavascript/>
                    <FaReact/>
                </div>
            </div>
            <div className="h-1/2 sm:h-4/5">
                <img className="rounded-lg h-full w-full" src={image} alt="" />
            </div>
        </div>
     );
}
 
export default Hero;