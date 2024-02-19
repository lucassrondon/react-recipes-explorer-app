import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <nav className='bg-green-900 p-2 shadow-2xl h-1/2 w-screen'>
            <div className='flex gap-4 text-white font-bold ml-4'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
    
}