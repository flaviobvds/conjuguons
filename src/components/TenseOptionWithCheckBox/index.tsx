import { Settings } from '@/pages';

import styles from './optionWithCheckBox.module.scss'

interface OptionWithCheckBoxProps {
    option: string;
    arrItem: string;
    settings: Settings;
    setSettings: (settings: Settings) => void;
}

export function TenseOptionWithCheckBox({option, arrItem, settings, setSettings}: OptionWithCheckBoxProps) {    
    const value = settings.verbTenses.includes(arrItem)

    return (
        <div className={styles.options}>
            <input
                type="checkbox"
                className={styles.checkBox}
                checked={value}
                onChange={(e) => {
                    if (e.target.checked === true) {
                        
                        // if a new item gets checked, add it to the array
                        setSettings({
                            ...settings,
                            verbTenses: [arrItem, ...settings.verbTenses]
                        })

                    } else {
                        
                        // if an item that was checked gets unchecked, remove it from the array
                        setSettings({
                            ...settings,
                            verbTenses: settings.verbTenses.filter((verbTense) => {return verbTense !== arrItem})
                        })
                    }
                }}
            />
            <span>{option}</span>
        </div>
    )
}