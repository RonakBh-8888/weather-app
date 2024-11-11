type FavoriteType = { name: string; id: string }; // Define your FavoriteType as needed


export const  revisedRandId = () : string => {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}
export const getFavorites = (): FavoriteType[] => {
  const storedFavorites = localStorage.getItem('favoritesWeather');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};


export const addFavorite = (newFavorite: FavoriteType) => {
  const currentFavorites = getFavorites();

  const updatedFavorites = [...currentFavorites, newFavorite].filter(
    (item, index, self) => index === self.findIndex((fav) => fav.id === item.id)
  );

  localStorage.setItem('favoritesWeather', JSON.stringify(updatedFavorites));
};

export const removeFavorite = (favoriteId: string) => {
  const currentFavorites = getFavorites();
  const updatedFavorites = currentFavorites.filter(fav => fav.id !== favoriteId);

  localStorage.setItem('favoritesWeather', JSON.stringify(updatedFavorites));
};



