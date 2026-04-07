import React from 'react'

interface MenuContextType {
  isOpen: boolean;
  toggleMenu: (value: boolean) => void;
}

export const MenuContext = React.createContext<MenuContextType>({
    isOpen: false,
    toggleMenu: (_: boolean) => { }
})

interface MenuProviderProps {
  children: React.ReactNode;
}

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuProvider