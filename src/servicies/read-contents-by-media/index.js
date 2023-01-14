import axios from "axios";
import useApiAddr from "../api-address";

const useReadContentsByMedia = () => {
  const apiAddr = useApiAddr();

  return async (mediaId) => {
   
    const axiosResult = await axios({
      method: "get",
      url: `${apiAddr}/mediaList/${mediaId}`,
    
    });
    const result = axiosResult.data;
 
    return result;
  };
};

export default useReadContentsByMedia;
