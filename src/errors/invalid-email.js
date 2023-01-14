class InvalidEmailError extends Error {
  constructor(invalidEmail) {
    super(`이메일 형식이 잘못되었습니다. 입력한 이메일: ${invalidEmail}`);
  }
}

export default InvalidEmailError;
