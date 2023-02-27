import { Settings } from '@/pages';

import styles from './optionWithCheckBox.module.scss'

interface OptionWithCheckBoxProps {
    option: string;
    arrItem: number;
    settings: Settings;
    setSettings: (settings: Settings) => void;
}

export function SubjectOptionWithCheckBox({option, arrItem, settings, setSettings}: OptionWithCheckBoxProps) {    
    const value = settings.subjects.includes(arrItem)

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
                            subjects: [arrItem, ...settings.subjects]
                        })

                    } else {
                        
                        // if an item that was checked gets unchecked, remove it from the array
                        setSettings({
                            ...settings,
                            subjects: settings.subjects.filter((subject) => {return subject !== arrItem})
                        })
                    }
                }}
            />
            <span>{option}</span>
        </div>
    )
}