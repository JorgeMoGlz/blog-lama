import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MenuPosts } from '../menuposts/MenuPosts';

export const Menu = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.subtitle}>What's hot</h3>
            <h2 className={styles.title}>Most popular</h2>
            <MenuPosts withImage={false} />
            <h3 className={styles.subtitle}>Discover by topic</h3>
            <h2 className={styles.title}>Categories</h2>
            <div className={styles.categoryList}>
                <Link href="/blog/cat=style" className={`${styles.categoryItem} ${styles.style}`}>
                    Style
                </Link>
                <Link href="/blog/cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>
                    Coding
                </Link>
                <Link href="/blog/cat=fashion" className={`${styles.categoryItem} ${styles.fashion}`}>
                    Fashion
                </Link>
                <Link href="/blog/cat=food" className={`${styles.categoryItem} ${styles.food}`}>
                    Food
                </Link>
                <Link href="/blog/cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>
                    Travel
                </Link>
                <Link href="/blog/cat=industry" className={`${styles.categoryItem} ${styles.industry}`}>
                    Industry
                </Link>
            </div>
            <h3 className={styles.subtitle}>Chosen by the editor</h3>
            <h2 className={styles.title}>Editor's pick</h2>
            <MenuPosts withImage={true}/>
        </div>
    )
}
