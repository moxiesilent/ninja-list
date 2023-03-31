import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum beatae cum nisi recusandae quo consequuntur tenetur architecto, non alias quis commodi et velit quibusdam est, sit quam explicabo a!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum beatae cum nisi recusandae quo consequuntur tenetur architecto, non alias quis commodi et velit quibusdam est, sit quam explicabo a!</p>
      <Link href="/ninjas" className={styles.btn}>
        See Ninja Listing
      </Link>
    </div>
    </>
  )
}
