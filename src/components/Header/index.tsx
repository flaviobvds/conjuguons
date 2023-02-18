import styles from './header.module.scss'
//import frflag from '../../assets/fr-flag.svg'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.langs}>
                    <button className={styles.langButton}>
                        <img src='./images/uk-flag.svg' alt="" />
                    </button>

                    <button className={styles.langButton}>
                        <img src='./images/fr-flag.svg' alt="" />
                    </button>

                    <button className={styles.langButton}>
                        <img src='./images/br-flag.svg' alt="" />
                    </button>
                </div>
                
                <nav className={styles.links}>
                    <a href='http://www.google.com'>Settings</a>
                    <a href='http://www.google.com'>About</a>
                </nav>
            </div>
        </header>
    )
}