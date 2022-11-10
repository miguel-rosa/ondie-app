
import Image from 'next/image'
import Link from 'next/link';
import useFavorites from '../../hooks/useFavorites';

import styles from './place.module.css'

import {HiOutlineBookmark} from 'react-icons/hi';
import { Place as TypePlace } from '../../types/Place';
import { FC } from 'react';

type Props = {
  item: TypePlace
}

const Place:FC<Props> = ({item}) => {
  const { favorites, addItemToFavorites, removeItemFromFavorites} = useFavorites();
  return (
          <Link href={`company/${item.slug}`} className={styles.card} key={item.id} >
            <div className={styles.imageCover}>
              <Image src={item.logo ?? ''} fill alt={`${item.name} logo`}/>
            </div>
            <div className={styles.infos}>

            <h2 className={styles.itemTitle}>{item.name}</h2>
            <div className={styles.favorite}>

            
            {favorites.some(({id}) => id===item.id) ? <HiOutlineBookmark size={23} fill="#0070f3" stroke="#0070f3" onClick={(event) => {
              event.preventDefault();removeItemFromFavorites(item)}} />:
 <HiOutlineBookmark size={23} stroke="#0070f3"
 onClick={(event) => {
  event.preventDefault();
  addItemToFavorites(item)
}}              
          />
}
          </div>
            </div>
          </Link>
      
  )
}


export default Place;