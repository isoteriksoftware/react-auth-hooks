export const AUTH_NO_PROVIDER_FLAG = Symbol("AUTH_NO_PROVIDER");

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean | null;
  token: string | null;
  error: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
