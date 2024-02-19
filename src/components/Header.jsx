import { useState } from 'react';
import main_img                from '/banner.avif';
import { useSearchParams }     from 'react-router-dom';

export default function Header({searchRecipes}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchTerm(inputValue);
    }

    const handleSearchRecipes = () => {
        if (!searchTerm) {
            return false;
        }
        setSearchParams({search: searchTerm});
        searchRecipes(searchTerm);
        setSearchTerm('');
    }

    return (
        <div className='flex justify-center gap-6 h-80 w-3/4 font-bold'>
            <div className='h-full w-full lg:w-2/5'>
                <h1 className='text-5xl text-green-400'>Look for <span className='text-yellow-400'>BANGER</span> Food</h1>

                <p className='mt-4 text-justify'>Look for oportunities to take your time and pick our delicious, one must say, Banger food recipes to make your life even more colorful!</p>

                <div className='flex mt-12 gap-4'>
                    <input onChange={handleInputChange} value={searchTerm} type="text" placeholder='Find a recipe...' className='border rounded-xl p-1 focus:outline-yellow-400 shadow-md' />
                    <button onClick={handleSearchRecipes} className='bg-green-900 rounded-2xl text-sm p-2 text-white shadow-md hover:bg-green-400'>Search</button>
                </div>
            </div>

            <img src={main_img} alt="" className='lg:flex hidden lg:w-2/5 lg:h-full rounded-2xl shadow-xl' />
        </div>    
    );
    
}
