import { useNavigate } from 'react-router-dom';

export default function Card({recipeArray}) {
    const {id, thumbnail_url, name, tags, prep_time_minutes} = recipeArray;

    const navigate = useNavigate();

    const navigateToRecipePage = () => {
        navigate(`recipe/${id}/instructions`);
    }

    return (
        <div onClick={navigateToRecipePage} className='flex h-full flex-col border-4 border-gray-300 rounded-xl p-1 shadow-xl hover:scale-110'>
            <img src={thumbnail_url} alt="" className='rounded-xl w-full h-32 md:h-44 lg:h-60' />

            <div className="flex flex-col justify-between h-28 p-2">   
                <p className='font-bold mt-4 text-sm truncate'>{name}</p>

                <div className='flex justify-between items-center'>
                    {tags.length > 0 ? <div className='bg-green-900 text-white text-sm rounded-md p-1 truncate'>{tags[0].display_name}</div> : null}
                    {prep_time_minutes ? <div> {prep_time_minutes} mins </div> : null}
                </div>
            </div>
        </div>
    );
    
}