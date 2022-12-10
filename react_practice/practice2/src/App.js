import BeforeLogInContainer from "./components/BeforeLogIn/BeforeLogInContainer";
import AfterLogInContainer from "./components/AfterLogIn/AfterLogInContainer";
import MemberRegistContainer from "./components/MemberRegist/MemberRegistContainer";
import { Provider } from "react-redux";
import store from "./components/store";

export default function App() {
  return (
    <Provider store={store}>
      <BeforeLogInContainer></BeforeLogInContainer>
      <AfterLogInContainer></AfterLogInContainer>
      <MemberRegistContainer></MemberRegistContainer>
    </Provider>
  );
}
