import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //  router.go(-1)
      router.push('/');
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Ninja List | 404 Error</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Ooooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the <Link href="/">Homepage</Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
