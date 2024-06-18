import styles from './blogpage.module.css';
import { CardList } from '../../components/cardlist/CardList';
import { Menu } from '../../components/menu/Menu';

export default function Blog() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style Blog</h1>
            <div className={styles.content}>
                <CardList />
                <Menu />

            </div>
        </div>
    )
}
