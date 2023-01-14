import { useState } from "react";
import useSignIn from "../../../servicies/sign-in/index";
import { useNavigate } from "react-router-dom";

const useLogic = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const onSubmit = async (event) => {
    event.preventDefault();
    signIn({ email, password });
    navigate("/");
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    onSubmit
  };
};

export default useLogic;
