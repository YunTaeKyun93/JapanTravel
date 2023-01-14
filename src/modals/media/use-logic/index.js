import { useState, useEffect } from "react";
const useLogic = () => {
const [bookMark, setBookMark] = useState();
// console.log('bookMark',bookMark)
const a = 1;
  return {
    bookMark,
    setBookMark,
    a

    // selectBookMark
  };
};
export default useLogic;
