"use client";

import styles from './writepage.module.css';
import Image from 'next/image';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Write() {
    const [open, setOpen] = useState(true);
    const [value, setValue] = useState("")
    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="" width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src="/image.png" alt="" width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt="" width={16} height={16} />
                        </button>
                    </div>
                )}
                <ReactQuill theme="bubble" 
                    value={value} 
                    onChange={setValue} 
                    placeholder="Tell your story"
                    className={styles.textArea} />
            </div>
            <button className={styles.publish}>
                Publish
            </button>
        </div>
    )
}
