import {FaRegSquare} from 'react-icons/fa'
import {BsTriangle,BsCircle} from 'react-icons/bs'


const Separator = () => {
    return ( 
        <div className="flex my-14 justify-center text-center">
            <div className="mx-2 text-red-600"><BsTriangle/></div>
            <div className="mx-2 text-blue-500"><FaRegSquare/></div>
            <div className="mx-2 text-yellow-400"><BsCircle/></div>
        </div>
     );
}
 
export default Separator;