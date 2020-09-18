const APIKEY = "41107a387e6f2eac72bee32c50c36eb5"

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/movie?api_key=${APIKEY}`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=99`,
};

export default requests