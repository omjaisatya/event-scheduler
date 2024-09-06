import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface AuthContextType {
  user: string | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const stringifyBlogData = window.localStorage.getItem("eventData");

    if (stringifyBlogData) {
      const blogData = JSON.parse(stringifyBlogData);
      const user = blogData.user;
      setAuth(user);
    } else {
      setAuth(null);
    }
  }, [navigate, location]);

  return (
    <AuthContext.Provider value={{ user: auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
