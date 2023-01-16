import useApiAddr from "../api-address";
import axios from "axios";

const useReadAnime = () => {
  const apiAddr = useApiAddr();

  return async (animeId) => {
    const axiosResult = await axios({
      method: "get",
      url: `${apiAddr}/animeList/${animeId}`,
    });
    
    const result = axiosResult.data;
    console.log('anime',result)
    return result;
  };
};

export default useReadAnime;
