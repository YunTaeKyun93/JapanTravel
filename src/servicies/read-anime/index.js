import useApiAddr from "../api-address";
import axios from "axios";

const useReadAnime = () => {
  const apiAddr = useApiAddr();

  return async (mediaId) => {
    const axiosResult = await axios({
      method: "get",
      url: `${apiAddr}/animeList/${mediaId}`,
    
    });
    
    const result = axiosResult.data;
    return result;
  };
};

export default useReadAnime;
