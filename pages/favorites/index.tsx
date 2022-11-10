import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Header from '../../components/Header'
import Place from '../../components/Place';
import useFavorites from '../../hooks/useFavorites';
import useSearch from '../../hooks/useSearch';
import styles from '../../styles/Home.module.css'
import { parsePlaces } from '../../utils/parsePlaces';
import stringSearch from '../../utils/stringSearch';
import { getCategories } from '../api/getCategories';
import { getCompanies } from '../api/getCompanies';


export async function getStaticProps() {
  const companies = await getCompanies();
  // console.log('database')
  const posts = parsePlaces(companies);

  return {
    props: {
      posts,
    },
  };
}

export default function Home({posts}: {posts: {id: string, name: string, slug: string, logo:string}[]}) {
  // console.log('posts', posts)
  const {textSearch} = useSearch();
  const { favorites} = useFavorites();
  console.log('favorites', favorites)
  return (
    <div className={styles.container}>
      <Head>
        <title>Ondié</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>
     <main className={styles.main}>
     <div className={styles.gridWrapper}>
        <div className={styles.grid}>
      {
        favorites.map((item) => (
          <Place item={item} key={item.id}/>
        ))
      }
      </div>
      </div>
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


