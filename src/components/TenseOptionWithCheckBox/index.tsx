import { useSettings } from '@/hooks/settings';

import styles from './optionWithCheckBox.module.scss'

interface OptionWithCheckBoxProps {
    option: string;
    arrItem: string;
}

export function TenseOptionWithCheckBox({option, arrItem}: OptionWithCheckBoxProps) {    
    const {settings, changeSettings} = useSettings();
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
                        changeSettings({
                            ...settings,
                            verbTenses: [arrItem, ...settings.verbTenses]
                        })

                    } else {
                        
                        // if an item that was checked gets unchecked, remove it from the array
                        changeSettings({
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