import {FaReact,FaDatabase,FaFigma} from 'react-icons/fa'

const Technologies = () => {
    return ( 
        <div id="technologies" className="my-3">
            <h1 className="text-2xl text-center my-6 mb-10 uppercase sm:text-4xl">Technologies</h1>
            <div className="flex justify-evenly flex-col text-start w-64 mx-auto lg:flex-row lg:w-full sm:w-96">
                <div>
                    <div className="text-3xl my-1"><FaReact/></div>
                    <h1 className="text-2xl my-1">Front-End</h1>
                    <h4 className="my-2">Experience with React JS and Vanilla JS</h4>
                </div>
                <div>
                    <div className="text-3xl my-1"><FaDatabase/></div>
                    <h1 className="text-2xl my-1">Back-End</h1>
                    <h4 className="my-2">Experience with Node JS, Php and databases</h4>
                </div>
                <div>
                    <div className="text-3xl my-1"><FaFigma/></div>
                    <h1 className="text-2xl my-1">UI/UX Design</h1>
                    <h4 className="my-2">Experience with Design Tools such as Figma</h4>
                </div>
            </div>
        </div>
     );
}
 
export default Technologies;