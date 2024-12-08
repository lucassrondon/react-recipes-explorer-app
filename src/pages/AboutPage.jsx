export default function AboutPage() {
    return (
        <>
            <div className="h-full bg-gradient-to-b from-yellow-100 to-orange-200 p-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-orange-700 mb-4">
                        Welcome to Our Recipes Collection!
                    </h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Discover a world of flavors and cuisines. From quick weekday meals to
                        gourmet feasts, explore a variety of recipes and bring joy to your table.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* About Recipes Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-orange-600 mb-4">
                            Why Explore Our Recipes?
                        </h2>
                        <p className="text-gray-700">
                            We provide a curated collection of recipes from across the globe. Find
                            inspiration for every occasion and satisfy your cravings with our easy-to-follow instructions.
                        </p>
                    </div>

                    {/* Imagery Section */}
                    <div className="relative">
                        <img
                            src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
                            alt="Delicious dish"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Variety Section */}
                    <div className="relative">
                        <img
                            src="https://images.theconversation.com/files/568397/original/file-20240109-27-idrupq.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C6709%2C4476&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
                            alt="Cooking inspiration"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-orange-600 mb-4">
                            A World of Culinary Inspiration
                        </h2>
                        <p className="text-gray-700">
                            Whether you’re looking for comfort food or trying a new cuisine, our
                            recipes are tailored to spark your creativity in the kitchen.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <h2 className="text-2xl font-bold text-orange-600 mb-4">
                        Start Exploring Today
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Browse through our diverse collection and bring fresh ideas to your
                        meals. Let’s get cooking!
                    </p>
                    <a
                        href="/"
                        className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg shadow hover:bg-orange-600"
                    >
                        Explore Recipes
                    </a>
                </div>
            </div>
        </>
    );
}
