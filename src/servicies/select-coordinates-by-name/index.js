import useReadAirports from "../read-airports";
const useSelectCoordinatesByName = () => {
  const readAirports = useReadAirports();
  return async (name) => {
    const airports = await readAirports();
    const airport = airports.find((airport) => airport.name == name);
    const coordinates = airport.coordinates;
    return coordinates;
  };
};

export default useSelectCoordinatesByName;
