import { useEffect } from "react";
import useAuth from "../auth/useAuth";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return <LoginForm />;
};

export default Login;
