import styles from './categorylist.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Popular categories</h2>
            <div className={styles.categories}>
                <Link href="/blog?cat=style" 
                    className={`${styles.category} ${styles.style}`}>
                    <Image src="/style.png" 
                        alt='style' 
                        width={32} 
                        height={32}
                        className={styles.image} />
                    Style
                </Link>
                <Link href="/blog?cat=coding" 
                    className={`${styles.category} ${styles.coding}`}>
                    <Image src="/coding.png" 
                        alt='style' 
                        width={32} 
                        height={32}
                        className={styles.image} />
                    Coding
                </Link>
                <Link href="/blog?cat=fashion" 
                    className={`${styles.category} ${styles.fashion}`}>
                    <Image src="/fashion.png" 
                        alt='style' 
                        width={32} 
                        height={32}
                        className={styles.image} />
                    Fashion
                </Link>
                <Link href="/blog?cat=food" 
                    className={`${styles.category} ${styles.food}`}>
                    <Image src="/food.png" 
                        alt='style' 
                        width={32} 
                        height={32}
                        className={styles.image} />
                    Food
                </Link>
                <Link href="/blog?cat=travel" 
                    className={`${styles.category} ${styles.travel}`}>
                    <Image src="/travel.png" 
                        alt='style' 
                        width={32} 
                        height={32}
                        className={styles.image} />
                    travel
                </Link>
                <Link href="/blog?cat=style" 
                    className={`${styles.category} ${styles.industry}`}>
                    <Image src="/style.png" 
                        alt='style' 
                        width={32} 
                        height={32}
                        className={styles.image} />
                    Industry
                </Link>
            </div>
        </div>
    )
}
