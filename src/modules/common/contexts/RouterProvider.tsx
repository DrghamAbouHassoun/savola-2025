import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface RouterContextType {
  currentRoute: string;
  homeKey: number;
  navigate: (path: string) => void;
  goHome: () => void;
}

export const RouterContext = createContext<RouterContextType>({
  currentRoute: "",
  homeKey: 0,
  navigate: () => {},
  goHome: () => {},
});

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [currentRoute, setCurrentRoute] = useState<string>("");
  const [homeKey, setHomeKey] = useState<number>(0);

  const navigate = (path: string) => {
    setCurrentRoute(path);
  };

  const goHome = () => {
    setCurrentRoute("");
    setHomeKey((prev) => prev + 1);
  };

  return (
    <RouterContext.Provider value={{ currentRoute, homeKey, navigate, goHome }}>
      {children}
    </RouterContext.Provider>
  );
};
