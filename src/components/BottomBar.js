import React from 'react'
import styles from '../styles/bottombar.module.css'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
const BottomBar = () => {
    return (
        <section className={styles.bottomBarContainer}>
            <h3 className={styles.bottomTitle}>Contact Us</h3>
            <div className={styles.links}>
                <div className={styles.socialLink}>
                    <AiFillInstagram className={styles.socialIcon} />
                    <a href="https://www.instagram.com/fedev9_/" className={styles.socialName}>@fedev9_</a>
                </div>
                <div className={styles.socialLink}>
                    <AiFillLinkedin className={styles.socialIcon} />
                    <a href="https://www.linkedin.com/in/federico-cecconi-27951619a/" className={styles.socialName}>Federico Cecconi</a>
                </div>
            </div>

        </section>
    )
}

export default BottomBar
