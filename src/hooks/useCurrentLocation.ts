import { useState, useCallback } from "react";
import { getCityFromCoordinates } from "../api/getCityFromCoordinates";

interface Coordinates {
  lat: number;
  lon: number;
}

export const useCurrentLocation = () => {
  const [city, setCity] = useState("");
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const location = {
          lat: coords.latitude,
          lon: coords.longitude,
        };

        setCoords(location);

        getCityFromCoordinates(location.lat, location.lon)
                  .then((cityName) => setCity(cityName))
                  .catch((error) => setError(error.message));

        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  }, []);

  return {
    city,
    setCity,
    coords,
    loading,
    error,
    fetchCurrentLocation,
  };
};
