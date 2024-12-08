import { useState, useEffect } from "react";
import axios from "axios";

const useUserLocation = () => {
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLocation = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://ipapi.co/json/");
      setLoading(false);
      const returnData = [response.data.country_name, `${response.data.region}/${response.data.city}`, response.data.ip]
      setLocation(returnData);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return { fetchLocation, location, locationError: error, loadingLocation: loading };
};

export default useUserLocation;
