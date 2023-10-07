import { useContext } from "react";
import AuthContext from "./AuthContext";
import { AUTH_NO_PROVIDER_FLAG } from "./auth.types";

const useAuth = () => {
  const data = useContext(AuthContext);

  if (data === AUTH_NO_PROVIDER_FLAG) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return data;
};

export default useAuth;
