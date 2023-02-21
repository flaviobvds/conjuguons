import styles from './optionWithCheckBox.module.scss'

interface OptionWithCheckBoxProps {
    option: string
}

export function OptionWithCheckBox({option}: OptionWithCheckBoxProps) {
    return (
        <div className={styles.options}>
            <input
                type="checkbox"
                className={styles.checkBox}
                onChange={e => console.log(e.target.checked)}
            />
            <span>{option}</span>
        </div>
    )
}