import { useParams } from 'react-router-dom';
import useFetchRecipeDetails from '../hooks/useFetchRecipeDetails';
import { useEffect } from 'react';
import LoadingIcon from '../components/LoadingIcon';
import Error from '../components/Error';
import NutritionalFacts from '../components/NutritionalFacts';
import RecipeMainContent from '../components/RecipeMainContent';

export default function RecipePage() {
    const { recipeid } = useParams();

    const [fetchRecipe, { data, loadingRecipe, loadingRecipeError }] = useFetchRecipeDetails();

    useEffect(() => {
        fetchRecipe(recipeid);
    }, []);

    if (loadingRecipe) return <LoadingIcon />
    if (loadingRecipeError) return <Error error={'Ops... Something went wrong.'} message={'Please, try again.'} />
    if (!data && !loadingRecipeError) return <Error error={'Recipe not found.'} message={'Please, try again.'} />
    console.log(data)
    if (data) return (
        <div className='flex flex-col items-center w-full h-fit gap-6'>
            <h1 className='text-2xl font-bold'>{data.name}</h1>

            <NutritionalFacts nutritionalFacts={data.nutrition} />

            <RecipeMainContent instructions={data.instructions} ingredients={data.sections[0].components} main_img={data.thumbnail_url} />
        </div>
    );
}
