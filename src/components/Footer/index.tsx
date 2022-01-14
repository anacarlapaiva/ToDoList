import React from 'react'
import styles from '../../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                <span className={styles.span}>
                    REACT + TS TODO
                </span>
                @ 2021
            </p>
        </footer>
    )
}

export default Footer
