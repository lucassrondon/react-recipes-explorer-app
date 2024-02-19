export default function NutritionalFact({fact}) {
    return (
        <div className="font-bold gap-2">
            {fact.img}
            <p>{fact.name}: {fact.value}</p>
        </div>
    )
}