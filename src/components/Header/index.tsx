import styles from './header.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav className={styles.langs}>
                    <a href='http://www.google.com'>Teste</a>  
                </nav>
                
                <nav className={styles.links}>
                    <a href='http://www.google.com'>Settings</a>
                    <a href='http://www.google.com'>About</a>
                </nav>
            </div>
        </header>
    )
}