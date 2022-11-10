import { createContext, useState, useContext, useEffect } from "react";
import { Place } from "../types/Place";

type Favorite = Place;

type FavoritesContextType = {
  favorites: Favorite[];
  addItemToFavorites:(place:Favorite) => void;
  removeItemFromFavorites: (place:Favorite) => void;
}

export const FavoritesContext = createContext({} as FavoritesContextType);

export const FavoritesStorage:React.FC<any> = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorite[] | [] >([]);

  const addItemToFavorites = (item:Favorite) => {

    const alreadyFavorited = favorites.some(({id}) => id === item.id)
    if(alreadyFavorited) return;
    const favoritesToAdd = [item, ...favorites];
    setFavorites(favoritesToAdd);
    window.localStorage.setItem('@FAVORITES', JSON.stringify(favoritesToAdd))
  }

  const removeItemFromFavorites = (item:Favorite) => {
    const updatedFavorites = favorites.filter(({id}) => id !== item.id)
    setFavorites(updatedFavorites);
    window.localStorage.setItem('@FAVORITES', JSON.stringify(favorites))
  }

  useEffect(() => {

    const savedFavorites = window.localStorage.getItem('@FAVORITES');
    if(!savedFavorites) return;
    setFavorites(JSON.parse(savedFavorites));
  }, [])

  return (
    <FavoritesContext.Provider value={{favorites, addItemToFavorites, removeItemFromFavorites}}>
      {children}
    </FavoritesContext.Provider>
  )
}


const useFavorites = () => {
  const context = useContext(FavoritesContext);
  return context;
}

export default useFavorites;
