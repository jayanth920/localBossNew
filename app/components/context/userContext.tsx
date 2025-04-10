'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type User = {
  _id: string;
  username: string;
  email: string;
  profilePic: string;
  phone: string;
  password: string;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  setSyncUser: (user: User | null) => void; // New function for syncing with localStorage
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);

  // Load initial user data from localStorage when the app first mounts
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUserState(JSON.parse(userData));
    }
  }, []);

  // Function to update the React context state without affecting localStorage
  const setUser = (user: User | null) => {
    setUserState(user);
  };

  // Function to update both the React context state and localStorage
  const setSyncUser = (user: User | null) => {
    setUserState(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user)); // Save to localStorage
    } else {
      localStorage.removeItem("user"); // Remove from localStorage if user is null
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserState(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, setSyncUser, logout: handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
