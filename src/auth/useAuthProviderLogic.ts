import { useState } from "react";
import { User } from "./auth.types";

const useAuthProviderLogic = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    // We're simulating logging in here for simplicity.
    // We should normally make a POST /login request to the backend API here
    // and use the response to set the user, token, etc.
    // You can switch to use real authentication logic here.

    if (email === "user@test.com" && password === "password123") {
      setUser({
        id: "123",
        email: email,
        name: "Test User",
      });

      setIsLoggedIn(true);
      setToken("1234");
      setError(null);
    } else {
      setError("Invalid email or password");
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setToken(null);
    setError(null);
  };

  return {
    user,
    isLoggedIn,
    token,
    error,
    login,
    logout,
  };
};

export default useAuthProviderLogic;
