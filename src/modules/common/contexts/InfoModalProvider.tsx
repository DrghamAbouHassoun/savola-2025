import { createContext, useState, type ReactNode } from "react";

interface InfoModalContextType {
  isOpen: boolean;
  toggleModal: (val: boolean) => void;
}

export const InfoModalContext = createContext<InfoModalContextType>({
  isOpen: false,
  toggleModal: () => {},
});

interface InfoModalProviderProps {
  children: ReactNode;
}

const InfoModalProvider = ({ children }: InfoModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggleModal = (val: boolean) => {
    setIsOpen(val);
  };
  return (
    <InfoModalContext.Provider
      value={{
        isOpen,
        toggleModal: handleToggleModal,
      }}
    >
      {children}
    </InfoModalContext.Provider>
  );
};

export default InfoModalProvider;
