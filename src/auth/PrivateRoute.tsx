import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { PropsWithChildren, useEffect } from "react";

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
