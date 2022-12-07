import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa";

const COLOR = "#3399ff";

const MemberRegistComponent = () => {
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
      <input type="text" className="input" placeholder="이름(실명)" />
      <input type="text" className="input" placeholder="아이디" />
      <input
        type="password"
        className="input"
        placeholder="비밀번호(8~16자의 영문, 숫자, 특수기호)"
      />
      <input type="email" className="input" placeholder="이메일" />
      <input type="tel" className="input" placeholder="휴대폰번호" />
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
      <button className="memberRegistBtn">가입하기</button>
    </MemberRegistBox>
  );
};

export default MemberRegistComponent;

const MemberRegistBox = styled.div`
  margin-top: 5%;
  width: 60%;
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
