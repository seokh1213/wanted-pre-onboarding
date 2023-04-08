import UserInfoForm from "../components/UserInfoForm";
import { useContext, useRef } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import { signInApi } from "../util/authApi";

const SignIn = () => {
  const { isAuth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const requestRef = useRef(false);

  if (isAuth) {
    return <Navigate to="/todo" />;
  }

  const onSubmitHandler = (email, password) => {
    if (requestRef.current) return;
    requestRef.current = true;

    signInApi(email, password)
      .then((res) => {
        console.log(res);
        alert(`로그인에 성공했습니다. ${email}`);
        setAuth(res.access_token);
        navigate("/todo");
      })
      .catch((e) => {
        alert("로그인에 실패했습니다.\n" + e.message);
        requestRef.current = false;
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

export default SignIn;
