import UserInfoForm from "../components/UserInfoForm";

const SignUp = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page">
      <h1>Sign Up</h1>
      <UserInfoForm isSignUp={true} onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default SignUp;
