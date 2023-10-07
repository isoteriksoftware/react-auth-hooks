import React, { useCallback, useState } from "react";
import useAuth from "../../auth/useAuth";

const useLoginFormLogic = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // handle login
      login(email, password);
    },
    [email, login, password]
  );

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
};

export default useLoginFormLogic;
