import { useState, useEffect } from "react";
import useFindMe from "./../../../servicies/find-me/index";

const useLogic = () => {
  const [user, setUser] = useState("");
  const findMe = useFindMe();
  const init = async () => {
    const user = await findMe();
    setUser(user);
  };
  useEffect(() => {
    init();
  }, []);
  return {
    user,
    isLoading: !user
  };
};
export default useLogic;
