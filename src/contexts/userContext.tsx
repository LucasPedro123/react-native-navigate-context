import { createContext, useState, ReactNode } from 'react';


// Criando a tipagem do contexto
interface UserContextProps {
    userName: string;
    setName: (user: string) => void;
}

// Criando um Contexto com react Native
export const UserContext = createContext<UserContextProps | undefined>(undefined);

// interface do Context Provider
interface UserContextProviderProps {
    children: ReactNode;
}

// Função do Context Provider
export function UserContextProvider({ children }: UserContextProviderProps) {
    const [userName, setName] = useState("");

    function saveUserName(user: string) {
        setName(user)
    }

    return (
        <UserContext.Provider value={{ userName, setName: saveUserName }}>
            {children}
        </UserContext.Provider>
    );
}
