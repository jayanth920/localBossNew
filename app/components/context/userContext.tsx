"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type User = {
  username: string;
  email: string;
  profilePic: string;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout: handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext<any>(UserContext);
  if (!context) {
    console.log("useUser must be used within a UserProvider");
  }
  return context;
};
