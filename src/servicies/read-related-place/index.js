import axios from "axios";
import useApiAddr from "../api-address";

const useReadRelatedPlace = () => {
  const apiAddr = useApiAddr();
  return async (placeId) => {
    const axiosResult = await axios({
        method:'get',
        url:`${apiAddr}/relatedPlaces/${placeId}`
    })
    console.log('relatedPlace',axiosResult.data)
    const result = axiosResult.data[0]
    console.log(result)
    return result
  };
};

export default useReadRelatedPlace;
