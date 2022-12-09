import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa";
import { useState } from "react";

const COLOR = "#3399ff";

const MemberRegistComponent = ({ registClick }) => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTel, setUserTel] = useState("");
  // const [userInfoyear, setUserInfoyear] = useState("");

  return (
    <MemberRegistBox>
      <div className="joinLogo">JOBKOREA</div>
      <div className="memberRegist">개인회원</div>
      <div className="memberRegistdiv1">
        <div className="registMessage">
          회원가입하고 다양한 혜택을 누리세요!
        </div>
        <div className="noticeMessage">
          <FaStarOfLife />
          필수 입력 정보입니다.
        </div>
      </div>
      <input
        type="text"
        className="input"
        value={userName}
        placeholder="이름(실명)"
        onInput={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        className="input"
        value={userId}
        placeholder="아이디"
        onInput={(e) => {
          setUserId(e.target.value);
        }}
      />
      <input
        type="password"
        className="input"
        value={userPw}
        placeholder="비밀번호(8자 이상의 영문, 숫자, 특수기호)"
        onInput={(e) => {
          setUserPw(e.target.value);
        }}
      />
      <input
        type="email"
        className="input"
        value={userEmail}
        placeholder="이메일"
        onInput={(e) => {
          setUserEmail(e.target.value);
        }}
      />
      <input
        type="tel"
        className="input"
        value={userTel}
        placeholder="휴대폰번호"
        onInput={(e) => {
          setUserTel(e.target.value);
        }}
      />
      <div className="radio">
        개인정보 유효기간 선택
        <FaStarOfLife />
        <input type="radio" name="infoyear" value="1year" />
        1년
        <input type="radio" name="infoyear" value="3years" />
        3년
        <input type="radio" name="infoyear" value="withdraw" />
        회원탈퇴시
      </div>
      <button
        className="memberRegistBtn"
        onClick={() => {
          registClick(userName, userId, userPw, userEmail, userTel);
        }}
      >
        가입하기
      </button>
    </MemberRegistBox>
  );
};

export default MemberRegistComponent;

const MemberRegistBox = styled.div`
  margin-top: 5%;
  width: 33%;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(./join_logo.png);
  background-repeat: no-repeat;
  & .joinLogo {
    font-size: 50px;
    font-weight: 700;
    color: ${COLOR};
    background-size: 20%;
  }
  & .memberRegistDiv1 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  & .registMessage {
    font-size: 1.1em;
  }
  & .noticeMessage {
    font-size: 12px;
    color: gray;
  }
  & .memberRegist {
    display: flex;
    justify-content: center;
    width: 96%;
    height: 10%;
    background-color: ${COLOR};
    color: white;
    font-size: 25px;
    font-weight: 700;
    padding: 2%;
  }
  & .memberRegistBtn {
    border: none;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10%;
    background-color: ${COLOR};
    color: white;
    font-size: 25px;
    font-weight: 700;
    padding: 2%;
  }
  & .input {
    padding: 3%;
    margin: 5px;
    width: 70%;
    border: 1px solid #dadada;
  }
  & .radio {
    display: row;
  }
`;
