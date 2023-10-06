import React, { useCallback, useState } from "react";
import { LoginFormValues } from "./LoginForm.types";

const useLoginFormLogic = (onSubmit: (values: LoginFormValues) => void) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      onSubmit({ email, password });
    },
    [email, onSubmit, password]
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
