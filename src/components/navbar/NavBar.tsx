import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

import { AuthLinks } from "../authlinks/AuthLinks";
import { ThemeToggle } from '../themetoggle/ThemeToggle';

export const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                <Image src="/instagram.png" alt="instagram" width={24} height={24} />
                <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
                <Image src="/youtube.png" alt="youtube" width={24} height={24} />
            </div>
            <div className={styles.logo}>Lama blog</div>
            <div className={styles.links}>
                <ThemeToggle />
                    <Link className={styles.link} 
                        href="/homepage">Homepage</Link>
                    <Link className={styles.link} 
                        href="/contact">Contact</Link>
                    <Link className={styles.link} 
                        href="/about">About</Link>
                <AuthLinks />
            </div>
        </div>
    )
}
