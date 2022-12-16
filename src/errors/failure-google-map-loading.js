class FailureGoogleMapLoading extends Error {
  constructor() {
    super(`지도 로딩이 실패 하였습니다.`);
  }
}

export default FailureGoogleMapLoading;