import useLocalStorageName from "../local-storage-name";
import axios from "axios";

const useFindMe = () => {
  const stroageName = useLocalStorageName();

  return async () => {
    // 현재 로그인된 유저의 ID를 가져온다.
    const currentLoggedInUserId = window.localStorage.getItem('user-id');
    if (currentLoggedInUserId == null) {
      return null;
    }

    // 유저의 데이터를 로딩한다.

    // 가져온 데이터를 리스폰스한다.


    // const db = JSON.parse(window.localStorage.getItem(stroageName));
    // const userId = db.users[0].userId
    // const currentUser = db.users.find((user) => user.userId === userId);

    // return currentUser;
  };
};

export default useMe;
