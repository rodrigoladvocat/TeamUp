import { ReactNode, createContext, useContext, useState } from "react";

type MenuContext = {
  menu: number;
  setMenu: (index: number) => void;
};
export const MenuContext = createContext({} as MenuContext);

export function useMenu() {
  return useContext(MenuContext);
}

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState(0);
  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
