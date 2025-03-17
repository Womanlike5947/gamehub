import useData from './useData';

// #region Interface
interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
// #endregion

// Makes Generic call to useData hook more specific & hides API call in the background
const useGenres = () => useData<Genre>('/genres');

export default useGenres;
