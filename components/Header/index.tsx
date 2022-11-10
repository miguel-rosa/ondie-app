import { FC } from 'react';
import { HiOutlineBookmark } from "react-icons/hi"
import { MdClose, MdSearch } from "react-icons/md"

import styles from "./Header.module.css";

import useSearch from '../../hooks/useSearch';
import Link from 'next/link';

type HeaderProps = {

}

const Header:FC<HeaderProps> = () => {
  const { textSearch, setTextSearch } = useSearch();
  return (
    <header className={styles.header}>

      <Link className={styles.logo} href="/"><b>ondié</b></Link>
      <div className={styles.search}>
        {textSearch ? <MdClose size="24" color="#908e8e" onClick={() => setTextSearch("")}/> : <MdSearch size="24" color="#908e8e" />}
        <input onChange={(event) => setTextSearch(event.target.value)} value={textSearch} className={styles.input} type="text" placeholder="Empresa"/>
      </div>
      <Link
        className={styles.button}
        href="/favorites"
      >
        <HiOutlineBookmark size={23} />
    Favoritos
      </Link>

    </header>
  );
}

export default Header;
