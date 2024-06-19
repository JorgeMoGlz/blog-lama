import styles from './singlepage.module.css';
import { Menu } from '../../components/menu/Menu';
import { Comments } from '@/components/commets/Comments';
import Image from 'next/image';

export default function SinglePage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, eligendi?
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>18-06-2024</span>
                        </div>

                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere totam officiis vitae odio nostrum rem labore maiores similique! Repudiandae, numquam!</p>
                        <h3>Subtitle</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere totam officiis vitae odio nostrum rem labore maiores similique! Repudiandae, numquam!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere totam officiis vitae odio nostrum rem labore maiores similique! Repudiandae, numquam!</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

