import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 520px;
  margin: 0 auto;

  .input-container {
    display: flex;
    margin-bottom: 5px;

    label {
      display: inline-block;
      min-width: 70px;
    }

    input {
      flex: 1;
    }
  }
`;

const UserInfoForm = (
  { isSignUp, onSubmitHandler } = {
    isSignUp: false,
    onSubmitHandler: (e) => {
      e.preventDefault();
    },
  }
) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const isValidState = email.includes("@") && password.length >= 8;

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <div className="input-container">
        <label htmlFor="emailInput">이메일: </label>
        <input
          id="emailInput"
          type="email"
          onChange={onChangeEmail}
          data-testid="email-input"
        />
      </div>
      <div className="input-container">
        <label htmlFor="passwordInput">비밀번호: </label>
        <input
          id="passwordInput"
          type="password"
          onChange={onChangePassword}
          data-testid="password-input"
        />
      </div>
      <button
        disabled={!isValidState}
        type="button"
        data-testid={isSignUp ? "signup-button" : "signin-button"}
      >
        {isSignUp ? "회원가입" : "로그인"}
      </button>
    </StyledForm>
  );
};

export default UserInfoForm;
