import axios from "axios";
import useApiAddr from "../api-address";
const useSignIn = () => {
  const apiAddr = useApiAddr();
  return async ({ email, password }) => {
    const axiosResult = await axios({
      method: "post",
      url: `${apiAddr}/login`,
      data: { email, password }
    });

    window.localStorage.setItem('token', axiosResult.data.token);
    window.localStorage.setItem('user-id', axiosResult.data.userId);
    
  };
};
export default useSignIn;
