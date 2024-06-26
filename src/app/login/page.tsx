import styles from './loginpage.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton}>
                    Sign in with Google
                </div> 
                <div className={styles.socialButton}>
                    Sign in with Github
                </div> 
                <div className={styles.socialButton}>
                    Sign in with Facebook
                </div> 
            </div>
        </div>
    )
}
