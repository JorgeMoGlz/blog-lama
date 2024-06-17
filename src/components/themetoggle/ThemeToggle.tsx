"use client";
import { useContext } from 'react';
import styles from './themetoggle.module.css';
import Image from 'next/image';
// import { ThemeContext } from '@/context/ThemeContext';

export const ThemeToggle = () => {
    // const { isDarkTheme } = useContext(ThemeContext);
    // console.log(isDarkTheme);

    return (
        <div className={styles.container}>
            <Image src="/moon.png" alt="moon" width={15} height={15} />
            <div className={styles.ball} />
            <Image src="/sun.png" alt="sun" width={15} height={15} />
        </div>
    )
}
