import { FC } from 'react';
import { FaWhatsapp } from "react-icons/fa"
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
      <button
        className={styles.button}
      >
        <FaWhatsapp/>
    Contato
      </button>

    </header>
  );
}

export default Header;
