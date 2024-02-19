import NutritionalFact from "./NutritionalFact";

export default function NutritionalFacts({nutritionalFacts}) {

    const fullInfoNutritionalFacts = [
        {
            id: '7',
            value: nutritionalFacts.calories,
            img: <span class="icon-[fluent-mdl2--calories]"></span>,
            name: 'Calories',
        },
        {
            id: '1',
            value: nutritionalFacts.carbohydrates,
            img: <span class="icon-[healthicons--carbohydrates-outline]"></span>,
            name: 'Carbs',
        },
        {
            id: '2',
            value: nutritionalFacts.sugar,
            img: <span class="icon-[healthicons--sugar-outline]"></span>,
            name: 'Sugar',
        },
        {
            id: '3',
            value: nutritionalFacts.fat,
            img: <span class="icon-[bx--cheese]"></span>,
            name: 'Fats',
        },
        {
            id: '5',
            value: nutritionalFacts.fiber,
            img: <span class="icon-[game-icons--oat]"></span>,
            name: 'Fibers',
        },
        {
            id: '6',
            value: nutritionalFacts.protein,
            img: <span class="icon-[carbon--fish]"></span>,
            name: 'Proteins',
        },
    ];

    return (
        <>
            <div className='flex justify-between w-5/6 md:w-1/2'>
                {fullInfoNutritionalFacts.map(item => <NutritionalFact key={item.id} fact={item} />)}
            </div>
        </>
    );
} 