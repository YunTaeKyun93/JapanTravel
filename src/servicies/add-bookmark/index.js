import useFindMe from "../find-me";
import axios from "axios";
import useApiAddr from "../api-address";
const useAddBookMark = () => {
  const findMe = useFindMe();
  const apiAdd = useApiAddr();
  return async (animeId) => {
    const currentUser = await findMe();
    const userId = currentUser.id;
    console.log("userId", userId);
    console.log("payload", animeId);

    await axios({
      method: "post",
      url: `${apiAdd}/bookmarks/${userId}/${animeId}`,
    });
  };
};
export default useAddBookMark;
