import { useSettings } from '@/hooks/settings';
import { subjects } from '../QuestionContainer';

import styles from './optionWithCheckBox.module.scss'

interface OptionWithCheckBoxProps {
    option: string;
}

export function SubjectOptionWithCheckBox({option}: OptionWithCheckBoxProps) {    
    const {settings, changeSettings} = useSettings();
    const arrItem = subjects.findIndex((subject) => {return subject === option})
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
                        changeSettings({
                            ...settings,
                            subjects: [arrItem, ...settings.subjects]
                        })

                    } else {
                        
                        // if an item that was checked gets unchecked, remove it from the array
                        changeSettings({
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