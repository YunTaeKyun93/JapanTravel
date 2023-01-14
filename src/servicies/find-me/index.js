import axios from "axios";
import NotLoggedInError from "../../errors/not-logged-in";
import useApiAddr from "../api-address";

/*
useFindMe: 현재 로그인된 유저의 데이터를 가져올 수 있는 서비스. 로그인이 되어있지 않은 경우 NotLoggedInError 예외를 던진다.
*/
const useFindMe = () => {
  const apiAddr = useApiAddr();

  return async () => {
    // 현재 로그인된 유저의 ID를 가져온다.
    const currentLoggedInUserId = window.localStorage.getItem("user-id");
    if (currentLoggedInUserId == null) {
      throw new NotLoggedInError();
    }

    // 현재 로그인된 유저의 토큰을 가져온다.
    const currentToken = window.localStorage.getItem("token");
    if (currentToken == null) {
      throw new NotLoggedInError();
    }

    // 유저의 데이터를 로딩한다.

    const axiosResult = await axios({
      method: "get",
      url: `${apiAddr}/me`,
      params: {
        user: currentLoggedInUserId
      },
      headers: {
        Authorization: currentToken
      }
    });

    // 가져온 데이터를 리스폰스한다.
    const data = axiosResult.data;
    const me = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    };

    return me;

    // const db = JSON.parse(window.localStorage.getItem(stroageName));
    // const userId = db.users[0].userId
    // const currentUser = db.users.find((user) => user.userId === userId);

    // return currentUser;
  };
};

export default useFindMe;

/*
const APage = () => {
  const findMe = useFindMe();

  useEffect(() => {
    const impl = async () => {
      console.log(await findMe());
    };

    impl();
  }, []);
}
*/
