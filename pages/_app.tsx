import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SearchStorage } from '../hooks/useSearch'
import { FavoritesStorage } from '../hooks/useFavorites'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoritesStorage>
    <SearchStorage>

      <Component {...pageProps} />
    </SearchStorage>
    </FavoritesStorage>
  )
}
