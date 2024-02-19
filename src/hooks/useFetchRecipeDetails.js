import { useReducer } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
  params: {
  },
  headers: {
    'X-RapidAPI-Key': 'b4afcc9256msh57f7f809cc07965p12ebd1jsnd4710ef65ef2',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

const initialState = {
  loadingRecipe: false,
  recipe: null,
  loadingRecipeError: null,
}

const Actions = {
  FETCHING_DATA: 'FETCHING_DATA',
  FETCHING_SUCCESSFUL: 'FETCHIN_SUCCESSFUL',
  FETCHING_ERROR: 'FETCHING_ERRING',
}

const reducer = (_, action) => {
  switch (action.type) {
    case Actions.FETCHING_DATA:
      return {
        loadingRecipe: true,
        recipe: null,
        loadingRecipeError: null,
      }
    case Actions.FETCHING_SUCCESSFUL:
      return {
        loadingRecipe: false,
        recipe: action.payload,
        loadingRecipeError: null,
      }
    case Actions.FETCHING_ERROR:
      return {
        loadingRecipe: false,
        recipe: null,
        loadingRecipeError: true,
      }
    default:
      return initialState
  }
}

const useFetchRecipeDetails = () => {
  const [{recipe, loadingRecipe, loadingRecipeError}, stateHandler] = useReducer(reducer, initialState)

  const fetchRecipe = async (recipeId) => {
    stateHandler({type: Actions.FETCHING_DATA, payload: null})
    try {
      let reqOptions = { ...options };
      reqOptions.params.id = recipeId;
      const response = await axios.request(reqOptions);
      stateHandler({type: Actions.FETCHING_SUCCESSFUL, payload: response.data})
    } catch (error) {
      console.log(error);
      stateHandler({type: Actions.FETCHING_ERROR, payload: null})
    }
  }

  return [fetchRecipe, { data: recipe, loadingRecipe, loadingRecipeError }];
}

export default useFetchRecipeDetails;