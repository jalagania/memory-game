import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ContextType {
  password: string;
  setPassword: (arg: string) => void;
  passwordLength: number;
  setPasswordLength: (arg: number) => void;
  optionsArray: string[];
  setOptionsArray: (arg: string[] | ((arg: string[]) => string[])) => void;
  strength: string;
  setStrength: (arg: string) => void;
}

const AppContext = createContext<ContextType>({} as ContextType);

function ContextProvider(props: PropsWithChildren) {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [optionsArray, setOptionsArray] = useState<string[]>([]);
  const [strength, setStrength] = useState<string>("");

  return (
    <AppContext.Provider
      value={{
        password,
        setPassword,
        passwordLength,
        setPasswordLength,
        optionsArray,
        setOptionsArray,
        strength,
        setStrength,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default ContextProvider;

export function useGlobalContext() {
  return useContext(AppContext);
}
