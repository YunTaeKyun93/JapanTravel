import  axios  from 'axios';
import useApiAddr from "../api-address";

const useReadAnimeList = ()=>{
    const apiAddr = useApiAddr()
    return async ()=>{
        const axiosResult = await axios({
            method:"get",
            url:`${apiAddr}/animeList`
        })
        const animeList = axiosResult.data;
        return animeList;
    }
}
export default useReadAnimeList;