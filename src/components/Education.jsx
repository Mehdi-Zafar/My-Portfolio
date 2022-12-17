const Education = () => {
    return ( 
        <div id="education">
            <h1 className="text-2xl text-center my-6 uppercase sm:text-4xl">Education</h1>
            <div className="m-6">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2014 - May 2017</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">O' Levels, Beaconhouse School System</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2017 - May 2019</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">A' Levels, Beaconhouse School System</p>
                    </li>
                    <li className="ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2019 - Currently</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">BE Computer Systems Engineering, NED University of Engineering and Technology</p>
                    </li>
                </ol>
            </div>
        </div>
     );
}
 
export default Education;