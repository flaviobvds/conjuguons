import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface LanguageProviderProps {
    children: ReactNode;
}

interface LanguageContextData {
    language: string,
    changeLanguage: (newLang: string) => void;
}

const LanguageContext = createContext<LanguageContextData>({} as LanguageContextData)



export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState('en');

    function changeLanguage(newLanguage: string) {
        setLanguage(newLanguage)
    }

    useEffect(() => {
        console.log(language)
    }, [language])

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    return context
}