import { useOutletContext, useParams, Link } from "react-router-dom";

export default function Ingredient() {

    const { recipeid } = useParams();
    const { ingredients } = useOutletContext();

    const renderIngredients = () => {
        return ingredients.map((item, index) => (
            <p>{`${index + 1}. ${item.raw_text}`}</p>
        ));
    }

    return (
        <div className='flex flex-col w-full lg:w-2/5 h-fit lg:h-full p-6 gap-6 border-4 border-gray-300 rounded-2xl bg-gray-100'>
            <Link to={`/recipe/${recipeid}/instructions`}>
                <button className="bg-yellow-600 hover:bg-yellow-300 p-2 text-white rounded-md">Instructions</button>
            </Link>
            {renderIngredients()}
        </div>
    );
}