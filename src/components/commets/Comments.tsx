import Link from 'next/link';
import styles from './comments.module.css';
import Image from 'next/image';

export const Comments = () => {
    const status = "authenticated";
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Comments</h2>
            {status === "authenticated"
                ? (<div className={styles.write}>
                        <textarea placeholder="Write a comment" className={styles.input}/>
                        <button className={styles.button}>Send comment</button>
                    </div>)
                : (<Link href="/login">Login to write a comment</Link>)
            }
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <Image src="/p1.jpeg" 
                        width={50} 
                        height={50} 
                        className={styles.image}
                        alt='' />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>19-06-2024</span>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae a voluptatum, aliquid veritatis suscipit tempore.
                    </p>
                </div>
                <div className={styles.comment}>
                    <Image src="/p1.jpeg" 
                        width={50} 
                        height={50} 
                        className={styles.image}
                        alt='' />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>19-06-2024</span>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae a voluptatum, aliquid veritatis suscipit tempore.
                    </p>
                </div>
                <div className={styles.comment}>
                    <Image src="/p1.jpeg" 
                        width={50} 
                        height={50} 
                        className={styles.image}
                        alt='' />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>19-06-2024</span>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae a voluptatum, aliquid veritatis suscipit tempore.
                    </p>
                </div>
            </div>
        </div>
    )
}
