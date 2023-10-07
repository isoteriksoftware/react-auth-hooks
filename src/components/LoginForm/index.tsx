import styled from "styled-components";
import useLoginFormLogic from "./useLoginFormLogic";
import useAuth from "../../auth/useAuth";

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

const ErrorMessageContainer = styled.div`
  background-color: #ffe0e0;
  color: #d93025;
  border-left: 5px solid #d93025;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  font-size: 1em;
  display: flex;
  align-items: center;
`;

const ErrorIcon = styled.span`
  font-size: 1.5em;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const LoginForm = () => {
  const { error } = useAuth();

  const { handleEmailChange, handlePasswordChange, handleSubmit } =
    useLoginFormLogic();

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

        {error && (
          <ErrorMessageContainer>
            <ErrorIcon>❌</ErrorIcon>
            <span>{error}</span>
          </ErrorMessageContainer>
        )}
        <FormButton type="submit">Submit</FormButton>
      </Container>
    </Root>
  );
};

export default LoginForm;
