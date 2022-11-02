import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
//import Menu from '../components/Menu.jsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project</title>
        <meta name="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
<table
        width="100%"
        //style={divStylesMenu}
        // align="left"
        //cellspacing="10"
        //cellpadding="10"

        border="0"
      >      
        <tr>

          <Link href="/">
          <span className={styles.logo}>
            <Image src="/triangulo.jpg" alt="Logo" width={30} height={20} />
          </span>
          </Link>
          <Link href="/">
            <a>Home  </a>
          </Link>
          <Link href="contacto">
             <a>Menu1  </a>
          </Link>
          <Link href="/">
             <a>Menu2  </a>
          </Link>
          <Link href="/">
             <a>Menu3  </a>
          </Link>
          <td align="right"></td>
        </tr>
      </table>

    </div>

      <footer className={styles.footer}>
        <a
          href="http://bitcoin-ether.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className={styles.logo}>
            {/* <Image src="/triangulo.jpg" alt="Logo" width={60} height={40} /> */}
          </span>
        </a>
      </footer>
    </div>
  )
}