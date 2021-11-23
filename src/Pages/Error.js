import React from 'react'
import styles from '../styles/error.module.css'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

const Error = () => {
    return (
        <section className={styles.errorContainer}>
            <h1>Error 404</h1>
            <p>Page not found...</p>
            <div className={styles.backHomeSection}>
                <Link to='/' className={styles.backHome}>
                    <h5>Back to Home</h5>
                    <AiFillHome className={styles.icon} />
                </Link>
            </div>
        </section>
    )
}

export default Error
