import { useEffect, useState } from "react";
import { AuthState, User } from "./auth.types";
import { useNavigate } from "react-router-dom";

const SESSION_STORAGE_KEY = "auth-provider-session-key";

const useAuthProviderLogic = (): AuthState => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (token && token === "1234") {
      // Normally we would make a GET request to the backend API here
      // to verify the token, return the user details
      // and use the response to set the user, token, etc.
      // You can switch to use real authentication logic here.

      setUser({
        id: "123",
        email: "user@test.com",
        name: "Test User",
      });
      setIsLoggedIn(true);
      setToken(token);
    }
  }, []);

  const login = (email: string, password: string) => {
    // We're simulating login here for simplicity.
    // We should normally make a POST /login request to the backend API here
    // and use the response to set the user, token, etc.
    // You can switch to use real authentication logic here.

    if (email === "user@test.com" && password === "password123") {
      setUser({
        id: "123",
        email: email,
        name: "Test User",
      });
      const loginToken = "1234"; // Normally this would be returned from the backend API

      setIsLoggedIn(true);
      setToken(loginToken);
      setError(null);
      sessionStorage.setItem(SESSION_STORAGE_KEY, loginToken);
    } else {
      setError("Invalid email or password");
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setToken(null);
    setError(null);
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    navigate("/");
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
