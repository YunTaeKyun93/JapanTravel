import axios from "axios";
import useApiAddr from "./../api-address/index";
import InvalidEmailError from "../../errors/invalid-email";

const useCreateUser = () => {
  const apiAddr = useApiAddr();
  return async ({ firstName, lastName, email, password }) => {
   
    try {
      await axios({
        method: "post",
        url: `${apiAddr}/users`,
        data: { firstName, lastName, email, password }
      });
    } catch (error) {
      if (error?.response?.data?.errorCode === 'INVALID_EMAIL') {
        throw new InvalidEmailError(email);
      }

      if (error?.response?.data?.errorCode === 'INVALID_PASSWORD') {
        throw new InvalidEmailError(email); // TODO
      }

      throw error;
    }
  };
};
export default useCreateUser;
