import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../styles/Row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  // options for playing movie trailers
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  // handle movie poster click event
  const handleClick = (movie) => {
    if (trailerUrl){
      setTrailerUrl('')
    }
    else{
      // {
      //   movie?.title || movie?.name || movie?.orginal_title
      // }
      movieTrailer(movie?.title || movie?.name || movie?.orginal_title || "")
        .then((url) => {
          // we get back something like this https://www.youtube.com/watch?v=XEFDGFDFD, we only need the code at the end of that
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }
  // a snippet of code that runs based on specific condition
  useEffect(() => {
    // if [](i.e empty array at the end) runs once when the page loads and will not run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters img-fluid">
        {/* poster movies would be displaey in row here */}
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={`${movie.name}`}
              onClick={() => handleClick(movie)}
            />
          );
        })}
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} /> }

      {/* Container --> posters */}
    </div>
  );
}

export default Row;
