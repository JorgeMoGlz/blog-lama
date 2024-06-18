import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MenuPosts } from '../menuposts/MenuPosts';
import { MenuCategories } from '../menucategories/MenuCategories';

export const Menu = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.subtitle}>What's hot</h3>
            <h2 className={styles.title}>Most popular</h2>
            <MenuPosts withImage={false} />

            <h3 className={styles.subtitle}>Discover by topic</h3>
            <h2 className={styles.title}>Categories</h2>
            <MenuCategories />
            

            <h3 className={styles.subtitle}>Chosen by the editor</h3>
            <h2 className={styles.title}>Editor's pick</h2>
            <MenuPosts withImage={true}/>
        </div>
    )
}
