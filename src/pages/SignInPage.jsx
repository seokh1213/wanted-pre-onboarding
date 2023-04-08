import UserInfoForm from "../components/UserInfoForm";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import { signIn } from "../util/authApi";

const SignInPage = () => {
  const { isAuth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isAuth) {
    return <Navigate to="/todo" />;
  }

  const onSubmitHandler = (email, password) => {
    signIn(email, password)
      .then((res) => {
        alert(`로그인에 성공했습니다. ${email}`);
        setAuth(res.access_token);
        navigate("/todo");
      })
      .catch((e) => {
        alert("로그인에 실패했습니다.\n" + e.message);
      });
  };

  return (
    <div className="page">
      <NavBar />
      <h1>Sign In</h1>
      <UserInfoForm isSignUp={false} onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default SignInPage;
