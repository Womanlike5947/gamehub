import genres from '../data/genres';

// #region Interface
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
// #endregion

// Makes Generic call to useData hook more specific & hides API call in the background
// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
