import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus enim
          ab sed quae! Ad saepe est voluptatum quasi atque! Maxime sit unde
          nostrum, dolorum delectus culpa, voluptas eaque corporis, vitae aut
          nobis quos nemo officiis magni obcaecati consectetur porro soluta.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus enim
          ab sed quae! Ad saepe est voluptatum quasi atque! Maxime sit unde
          nostrum, dolorum delectus culpa, voluptas eaque corporis, vitae aut
          nobis quos nemo officiis magni obcaecati consectetur porro soluta.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
