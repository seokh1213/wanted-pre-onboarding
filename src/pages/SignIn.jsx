import UserInfoForm from "../components/UserInfoForm";

const SignIn = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page">
      <h1>Sign In</h1>
      <UserInfoForm isSignUp={true} onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default SignIn;
