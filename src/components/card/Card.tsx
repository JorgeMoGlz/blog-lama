import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>17-06-2024</span>
                    <span> - </span>
                    <span className={styles.category}>CODING</span>
                </div>
                <h3 className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, accusantium.
                </h3>
                <p className={styles.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, ducimus. Aliquam consequatur non aspernatur nam veritatis cumque neque maiores, dolorum porro provident. Tempora ad ex earum aut maxime quasi labore.
                </p>
                <Link href="/" className={styles.link}>
                    Read more
                </Link>
            </div>
        </div>
    )
}
