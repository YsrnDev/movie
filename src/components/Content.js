import axios from 'axios';
import { useState, useEffect } from 'react';

const Content = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  return (
    <>
      <h1 className="text-4xl font-semibold my-10 text-center text-white" id="Trending">
        Trending Movie
      </h1>
      <div className="md:flex md:flex-wrap md:gap-10 md:justify-evenly p-10 rounded-xl bg-slate-300 bg-opacity-20 shadow-xl">
        {movies.map((result, index) => {
          return (
            <div className="w-full md:w-1/4 border h-[500px] rounded-xl overflow-hidden text-center shadow-xl mb-10 md:mb-0" key={index}>
              <img src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="test" className="h-[73%] w-full" />
              <div className="px-4">
                <button href="#" className="text-lg font-bold pt-2">
                  {result.title}
                </button>
                <p className="text-base pt-2 truncate"> {result.overview}</p>
                <p className="pt-2 font-semibold">Release date : {result.release_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Content;
