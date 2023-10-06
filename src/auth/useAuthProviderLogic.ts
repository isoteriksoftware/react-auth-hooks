import { useState } from "react";
import { User } from "./auth.types";

const useAuthProviderLogic = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    // We're simulating logging in here
    // We should normally make a POST /login request here
    // and use the response to set the user, token, etc.

    if (email === "user@test.com" && password === "password123") {
      setUser({
        id: "123",
        email: email,
        name: "Test User",
      });

      setIsLoggedIn(true);
      setToken("1234");
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setToken(null);
  };

  return {
    user,
    isLoggedIn,
    token,
    login,
    logout,
  };
};

export default useAuthProviderLogic;
