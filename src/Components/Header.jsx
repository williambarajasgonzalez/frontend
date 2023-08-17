import { Link } from 'react-router-dom';
import img from '../assets/logo.png'

export default function Footer(){
    return (
        <nav className='bg-gray-100 h-20 flex align-middle justify-around'>
            <img className="w-24" src={img} />
            <div className='flex gap-3 align-middle h-full items-center'>
                <Link to="/" className='text-gray-500 p-3 hover:bg-gray-500 hover:text-white rounded-full hover:cursor-pointer'>Acerca de mí</Link>
                <Link to='/mistrabajo' className='text-gray-500 p-2 hover:bg-gray-500 hover:text-white rounded-full'>Mis trabajo</Link>
                <Link to='/mistrabajo' className='text-gray-500 p-2 hover:bg-gray-500 hover:text-white rounded-full'>Mis trabajo</Link>
                <Link to='/secretpath' className='text-gray-500 p-2 hover:bg-gray-500 hover:text-white rounded-full'> </Link>
            </div>
            
        </nav>
    );
}
