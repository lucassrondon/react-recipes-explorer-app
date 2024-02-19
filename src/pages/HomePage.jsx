import Header              from '../components/Header';
import CardList            from '../components/CardList';
import LoadingIcon         from '../components/LoadingIcon';
import { useEffect }       from 'react';
import useFetchRecipes     from '../hooks/useFetchRecipes';
import { useSearchParams } from 'react-router-dom';

export default function HomePage() {
  const [fetchRecipes, { data, loadingRecipes, loadingRecipesError }] = useFetchRecipes();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchRecipes(searchParams.get('search'));
  }, []);

  const searchRecipes = (searchTerm) => {
    fetchRecipes(searchTerm);
  }

  return (
    <>
      {/* Header div */}
      <Header searchRecipes={searchRecipes} />

      {/* Div for listing search content */}
      {loadingRecipes && <LoadingIcon />}
      {data && <CardList recipes={data} />}
      {loadingRecipesError && <p>Ops... Something went wrong.</p>}
    </>
  );
}
