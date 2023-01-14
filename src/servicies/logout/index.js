import axios from 'axios';
import {useCallback} from 'react';
import useApiAddr from '../api-address';

const useLogout = () => {
  const apiAddr = useApiAddr();

  return useCallback(async () => {
    const token = window.localStorage.getItem('token');
    if (token == null) {
      // TODO 예외를 던져도 되고, 그냥 리턴을 해도 되고.
      return;
    }

    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user-id');
    await axios({
      method: 'post',
      url: `${apiAddr}/logout`,
      data: {
        token,
      },
    });
  }, [/*apiAddr*/]);
};

export default useLogout;
