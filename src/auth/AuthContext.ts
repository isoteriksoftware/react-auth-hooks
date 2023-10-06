import { createContext } from "react";
import { AuthState } from "./auth.types";

const AuthContext = createContext<AuthState>({
  user: null,
  isLoggedIn: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
