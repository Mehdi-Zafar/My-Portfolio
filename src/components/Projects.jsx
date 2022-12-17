import { projectsinfo } from "../data/projectsinfo";
const Projects = () => {
    return ( 
        <div id="projects" className="mb-6">
            <h1 className="text-2xl text-center my-6 uppercase sm:text-4xl">Projects</h1>
            <div className="flex justify-evenly flex-wrap">
                {projectsinfo.map((project)=>(
                <div key={project.id} className="max-w-sm tracking-wide pb-2 rounded-md overflow-hidden shadow-md shadow-white m-2 h-fit sm:h-auto hover:shadow-lg hover:shadow-white">
                    <img className="w-full h-2/5 duration-1000 hover:scale-105 hover:duration-1000" src={project.image} alt="Image"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-amber-200 tracking-widest text-center">{project.title}</div>
                        <p className="text-gray-400 text-base h-24">
                        {project.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {project.tags.map((tag)=>(
                            <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                        ))}
                    </div>
                    <div className="flex justify-around my-2">
                        {project.code && <a className="py-1 px-3 rounded-sm bg-blue-800" href={project.code} target="_blank">Code</a>}
                        {project.source && <a className="py-1 px-3 rounded-sm bg-red-800" href={project.source} target="_blank">Source</a>}
                    </div>
                </div>
                ))}
                
            </div>
        </div>
     );
}
 
export default Projects;