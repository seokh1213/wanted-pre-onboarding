import UserInfoForm from "../components/UserInfoForm";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate } from "react-router";
import NavBar from "../components/NavBar";

const SignUp = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/todo" />;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
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
