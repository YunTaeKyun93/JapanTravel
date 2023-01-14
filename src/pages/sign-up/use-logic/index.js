import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCreateUser from "../../../servicies/create-user";
const useLogic = () => {
  const navigate = useNavigate();
  const createUser = useCreateUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedAnime, setCheckedAnime] = useState([]);
  const [animeList, setAnimeList] = useState([
    { title: "너의이름은", id: "kiminonawa" }
  ]);
  const onSubmit = (event) => {
    event.preventDefault();
    createUser({ firstName, lastName, email, password });
    navigate("/");
  };
  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
    checkedAnime,
    setCheckedAnime
  };
};
export default useLogic;
