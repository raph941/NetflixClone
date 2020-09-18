import React, {useState, useEffect} from 'react'
import axios from '../axios'
import requests from '../requests'
import "../styles/Banner.css"

const baseURL = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchActionMovies)

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -  1)
                ]
            )

            return request
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
      <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                ${baseURL}${movie?.backdrop_path}
            )`
        }}
      >
        {/* <-- Background image */}
        <div className="banner__contents">
          <h1 className="banner__title">{movie?.title || movie?.name || movie?.orginal_title}</h1>
          
          <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className = "banner__button">My List</button>
          </div>
          
          <h1 className="banner__description">
            { truncate(movie?.overview, 150) }
          </h1>
        </div>

        <div className="banner__fadeBottom" ></div>
      </header>
    );
}

export default Banner