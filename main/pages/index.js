import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

import "bootstrap/dist/css/bootstrap.css";

export default function Home({ allPostsData }) {
  return (
    <main>
      <Head>
        <div className='text-center h2 text-dark m-5'>Demo Project</div>
      </Head>
    
    </main>
  );
}

