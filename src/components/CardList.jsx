import Card from './Card';

export default function CardList({recipes}) {
    return (
        <div className='flex items-center h-fit w-3/4'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 h-full w-full gap-6'>
                {recipes.map((item) => {
                    return <Card key={item.id} recipeArray={item} />;
                })}
            </div>
        </div>
    );
    
}