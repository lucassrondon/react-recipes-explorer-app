import Card from "./Card";

export default function CardList({ recipes, country }) {
  return (
    <div className="flex flex-col items-center h-fit w-3/4">
      <div className="w-full text-center bg-blue-100 border border-blue-300 rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold text-blue-700">
          We can see you are from {country}. Welcome!
        </h2>
        <p className="text-blue-600">
          Have a look at some delicious recipes from your country:
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 h-full w-full gap-6">
        {recipes.map((item) => {
          return <Card key={item.id} recipeArray={item} />;
        })}
      </div>
    </div>
  );
}
