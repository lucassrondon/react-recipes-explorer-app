import { useState } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20',
    /* q: 'lobster' */
  },
  headers: {
    'X-RapidAPI-Key': 'b4afcc9256msh57f7f809cc07965p12ebd1jsnd4710ef65ef2',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [loadingRecipes, setLoadingRecipes] = useState(false);
  const [loadingRecipesError, setLoadingRecipesError] = useState(null);

  const fetchRecipes = async (searchText) => {
    setLoadingRecipes(true);
    setLoadingRecipesError(null);
    setRecipes(null);
    try {
      let reqOptions = { ...options };
      if (searchText) {
        reqOptions.params.q = searchText;
      }

      const response = await axios.request(reqOptions);
      setLoadingRecipes(false);
      setRecipes(response.data.results);
    } catch (error) {
      console.log(error);
      setLoadingRecipesError(true);
      setLoadingRecipes(false);
    }
  }

  return [fetchRecipes, { data: recipes, loadingRecipes, loadingRecipesError }];
}

export default useFetchRecipes;