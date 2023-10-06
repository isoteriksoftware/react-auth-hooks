import styled from "styled-components";
import { LoginFormProps } from "./LoginForm.types";
import useLoginFormLogic from "./useLoginFormLogic";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.form`
  max-width: 480px;
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
`;

const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  background: #ffffff;
  color: #333;
  border: none;
  border-radius: 25px;
  padding: 15px 20px;
  box-sizing: border-box;
  font-size: 1em;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  border: 2px solid transparent;
  margin-bottom: 20px;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: #6ee7b7;
    box-shadow: 0px 8px 15px rgba(46, 229, 157, 0.4);
  }
`;

const FormButton = styled.button`
  background: linear-gradient(45deg, #6ee7b7, #3b8beb);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 15px 20px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  display: inline-block;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(45deg, #3b8beb, #6ee7b7);
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    transform: translateY(-3px);
  }

  &:focus {
    outline: none;
  }
`;

const FormTitle = styled.h2`
  color: #333;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { handleEmailChange, handlePasswordChange, handleSubmit } =
    useLoginFormLogic(onSubmit);

  return (
    <Root>
      <Container onSubmit={handleSubmit}>
        <FormTitle>Login</FormTitle>
        <FormInput
          placeholder="Email"
          type="email"
          name="email"
          required
          onChange={handleEmailChange}
        />
        <FormInput
          placeholder="Password"
          type="password"
          name="password"
          required
          onChange={handlePasswordChange}
        />
        <FormButton type="submit">Submit</FormButton>
      </Container>
    </Root>
  );
};

export default LoginForm;
