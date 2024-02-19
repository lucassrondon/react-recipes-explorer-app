import NutritionalFacts from '../components/NutritionalFacts';
import RecipeMainContent from './RecipeMainContent';

export default function RecipeHeader({data}) {
    return (
        <div className='flex flex-col items-center w-full h-fit gap-6'>
            <h1 className='text-2xl font-bold'>{data.name}</h1>

            <NutritionalFacts nutritionalFacts={data.nutrition} />

            <RecipeMainContent instructions={data.instructions} main_img={data.thumbnail_url} />
        </div>
    );
}