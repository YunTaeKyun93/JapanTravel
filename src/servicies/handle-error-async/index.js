import NotLoggedInError from "../../errors/not-logged-in";

const useHandleErrorAsync = () => {
  return (fn) => {
    const newFn = async (...params) => {
      try {
        await fn(...params);
      } catch (error) {
        if (error instanceof NotLoggedInError) {
          window.alert('로그인이 필요한 기능입니다.');
          // if (window.confirm('로그인이 필요한 기능입니다. 로그인을 하시겠습니까?')) {
          //   // navigate('/login');
          //   // toLogin();
          // }
          return;
        }

        console.error(error);
        alert('알 수 없는 에러가 발생했습니다.');
        // Sentry()
      }
    };
    return newFn;
  };
};
export default useHandleErrorAsync;
