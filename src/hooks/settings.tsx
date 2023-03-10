import { createContext, ReactNode, useState, useContext, useEffect } from "react";

interface settingsProviderProps {
    children: ReactNode
}

interface SettingsContextData {
    settings: Settings,
    changeSettings: (settings: Settings) => void,
}

export interface Settings {
    subjects: number[],
    verbs: 'top25verbs' | 'top50verbs' | 'top100verbs' | 'allverbs',
    verbTenses: string[]
}

const SettingsContext = createContext<SettingsContextData>({} as SettingsContextData)

export function SettingsProvider({children}: settingsProviderProps) {
    const [settings, setSettings] = useState<Settings>({
        subjects: [0,1,2,3,4,5,6,7],
        verbs: "top100verbs" as const,
        verbTenses: ['PRESENT', 'PASSE_COMPOSE', 'IMPARFAIT', 'PLUS_QUE_PARFAIT', 'FUTUR']
    })

    useEffect(() => {
        console.log(settings)
    }, [settings])

    function changeSettings(settings: Settings) {
        setSettings(settings)
    }

    return (
        <SettingsContext.Provider value={{settings, changeSettings}}>
            {children}
        </SettingsContext.Provider>
    )
}

export function useSettings() {
    return useContext(SettingsContext)
}