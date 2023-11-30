import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Spline from '@splinetool/react-spline';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ani-Mazing</title>
        <meta name="description" content="Some 3D experiments" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      
        <div className={styles.description}>
          <p>
           Some very juicy <code className={styles.code}> ANIMATIONS </code> incoming:&nbsp;
          </p>
          <div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.center}/>
          <Spline scene='https://prod.spline.design/nkQqswQh3T9FRcI8/scene.splinecode' className={styles.donut} style={{"z-index": "10",
            "max-height": "400px", height: "400px", width: "320px"}}/>
        </div>
        <div className={styles.grid}>
          
          <a
            href="https://portfolio-wietsev.vercel.app/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Portfolio <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out my other projects.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
