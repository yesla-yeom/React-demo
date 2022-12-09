const TYPE = {
  REGIST: "regist",
};

const registLog = (userName, userId, userPw) => ({
  type: TYPE.REGIST,
  payload: { name: userName, id: userId, pw: userPw },
});
// action 그 자체

export const action = { registLog };

export const reducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.REGIST:
      return [...state, payload];
    default:
      return state;
  }
};

// store에 저장된 값 가져오는 게 useSelector
// action을 전달해주는 dispatch, return하는 게 reducer
// useDispatch는 알바생~
