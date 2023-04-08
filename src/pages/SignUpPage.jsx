import UserInfoForm from "../components/UserInfoForm";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import { signUp } from "../util/authApi";

const SignUpPage = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isAuth) {
    return <Navigate to="/todo" />;
  }

  const onSubmitHandler = (email, password) => {
    signUp(email, password)
      .then(() => {
        alert(`회원가입에 성공했습니다. ${email}`);
        navigate("/signin");
      })
      .catch((e) => {
        alert("회원가입에 실패했습니다.\n" + e.message);
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

export default SignUpPage;
