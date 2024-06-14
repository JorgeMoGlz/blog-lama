import styles from './authlinks.module.css';
import Link from 'next/link';

export const AuthLinks = () => {
    // temporary
    const status = "notauthenticated";
    return (
        <>
            {status==="notauthenticated"
                ? ( <Link href="/login">Login</Link> )
                : (
                    <>
                        <Link href="/write" >Write</Link>
                        <span className={styles.link}>Logout</span>
                    </>
                )
            }
        </>
    )
}
