import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { PropsWithChildren } from "react";

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
