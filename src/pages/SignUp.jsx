import UserInfoForm from "../components/UserInfoForm";
import { useContext, useRef } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import { signUpApi } from "../util/authApi";

const SignUp = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const requestRef = useRef(false);

  if (isAuth) {
    return <Navigate to="/todo" />;
  }

  const onSubmitHandler = (email, password) => {
    if (requestRef.current) return;
    requestRef.current = true;

    signUpApi(email, password)
      .then(() => {
        alert(`회원가입에 성공했습니다. ${email}`);
        navigate("/signin");
      })
      .catch((e) => {
        alert("회원가입에 실패했습니다.\n" + e.message);
        requestRef.current = false;
      });
  };

  return (
    <div className="page">
      <NavBar />
      <h1>Sign Up</h1>
      <UserInfoForm isSignUp={true} onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default SignUp;
