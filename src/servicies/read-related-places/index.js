import useReadAnime from "../read-anime";
import axios from "axios";
import useApiAddr from "../api-address";
const useReadRelatedPlaces = () => {
  const apiAddr = useApiAddr();
  return async (relatedPlaces) => {
    const axiosResult = await axios({
      method: "get",
      url: `${apiAddr}/places`,
      params:{relatedPlaces}
    });
    const places = axiosResult.data
    return places
  };
};

export default useReadRelatedPlaces;
