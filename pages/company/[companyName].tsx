import Head from 'next/head'
import { useRouter } from 'next/router'

import Image from 'next/image'
import Header from '../../components/Header'
import styles from '../../styles/Home.module.css'
import { parseProperties } from '../../utils/parse-properties';
import { getCompanyByName } from '../api/getCompanyBySlug';

export async function getStaticProps({params}) {
  console.log('params', params)
  const name = params?.companyName;
  const database = await getCompanyByName({name});

  const company = parseProperties(database)[0];

  return {
    props: {
      company
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { companyName: 'test' } },
    ],
    fallback: true,
  }
}

export default function Home({company}) {
  console.log('company', company)
  console.log('company Name', company?.name)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {company?.name}
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


