import React from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pizza Shop</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>Made by Cocoa.</footer>
        </div>
    )
}
