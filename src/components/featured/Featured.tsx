import styles from './featured.module.css'
import Image from 'next/image';

export const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Lama DEV here.</b> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" 
                        alt="p1" 
                        width={500} 
                        height={500}
                        className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.postTitle}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <p className={styles.postDescription}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut a veniam deleniti sapiente accusamus, officiis aperiam, et sunt repellat accusantium quibusdam. Nihil distinctio doloribus similique autem reiciendis minus animi rem?
                    </p>
                    <button className={styles.button}>
                        Read more
                    </button>
                </div>
            </div>
        </div>
    )
}
