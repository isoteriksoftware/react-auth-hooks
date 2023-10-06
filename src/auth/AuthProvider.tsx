import AuthContext from "./AuthContext";
import { AuthProviderProps } from "./auth.types";
import useAuthProviderLogic from "./useAuthProviderLogic";

const AuthProvider = ({ children }: AuthProviderProps) => {
  const data = useAuthProviderLogic();

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
