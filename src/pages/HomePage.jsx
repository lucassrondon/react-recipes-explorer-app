import Header from "../components/Header";
import CardList from "../components/CardList";
import LoadingIcon from "../components/LoadingIcon";
import { useEffect, useState } from "react";
import useFetchRecipes from "../hooks/useFetchRecipes";
import useUserLocation from "../hooks/useUserLocation";
import { useSearchParams } from "react-router-dom";
import VPNModal from "../modals/VPNModal";

export default function HomePage() {
  const [
    fetchRecipes,
    { data, loadingRecipes, loadingRecipesError },
  ] = useFetchRecipes();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    fetchLocation,
    location,
    locationError,
    loadingLocation,
  } = useUserLocation();

  useEffect(() => {
    fetchLocation();
  }, []);

  const searchRecipes = (searchTerm) => {
    fetchRecipes(searchTerm);
  };

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  useEffect(() => {
    if (location.length > 0) {
      fetchRecipes(location[0]);
      openModal();
    }
  }, [location]);

  return (
    <>
      <Header searchRecipes={searchRecipes} />

      {isOpen && location.length > 0 && (
        <VPNModal
          ipAddress={location[2]}
          location={location[1]}
          closeModal={closeModal}
        />
      )}
      {(loadingRecipes || loadingLocation) && <LoadingIcon />}
      {data && location && (
        <CardList recipes={data} country={location[0]} />
      )}
      {loadingRecipesError && <p>Ops... Something went wrong.</p>}
    </>
  );
}
