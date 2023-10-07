import { createContext } from "react";
import { AUTH_NO_PROVIDER_FLAG, AuthState } from "./auth.types";

const AuthContext = createContext<AuthState | typeof AUTH_NO_PROVIDER_FLAG>(
  AUTH_NO_PROVIDER_FLAG
);

export default AuthContext;
