import { useContext } from "react";
import AuthContext from "./AuthContext";

const useAuth = () => {
  const data = useContext(AuthContext);

  if (data === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return data;
};

export default useAuth;
