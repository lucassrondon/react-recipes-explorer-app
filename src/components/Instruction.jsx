import { useOutletContext, Link, useParams } from "react-router-dom";

export default function Insctruction() {
    const { recipeid } = useParams();
    const { instructions } = useOutletContext();

    const renderInstructions = () => {
        return instructions.map((item, index) => (
            <p>{`${index + 1}. ${item.display_text}`}</p>
        ));
    }

    return (
        <div className='flex flex-col w-full lg:w-2/5 h-fit lg:h-full p-6 gap-6 border-4 border-gray-300 rounded-2xl bg-gray-100'>
            <Link to={`/recipe/${recipeid}/ingredients`}>
                <button className="bg-yellow-600 hover:bg-yellow-300 p-2 text-white rounded-md">Ingredients</button>
            </Link>
            {renderInstructions()}
        </div>
    );
}