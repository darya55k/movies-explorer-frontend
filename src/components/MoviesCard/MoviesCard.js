import React from 'react';
import './MoviesCard.css';

import { setTimeFormat } from '../../utils/utils';

function MoviesCard({movie, saved, onMovieSave, onMovieDelete}) {
  const [isSaved, setIsSaved] = React.useState(false);
  const [isBtnDelete, setisBtnDelete] = React.useState(false);

  const name = movie.nameRU;
  const linkImage = `${saved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`}`;
  const trailerLink = movie.trailerLink;
  const duration = movie.duration;
  const savedMovie = JSON.parse(localStorage.getItem('savedMovies')).find((item) => item.nameRU === movie.nameRU);

  function handleMouseEnter() {
    setisBtnDelete(true);
  }

  function handleMouseLeave() {
    setisBtnDelete(false);
  }

  function handleMovieDeleteClick() {
    if(saved) {
      onMovieDelete(movie._id);
    } else {
      onMovieDelete(savedMovie._id);
      setIsSaved(false);
    }
  }

  function handleMovieLikeClick() {
    if(isSaved) {
      handleMovieDeleteClick();
    } else {
      onMovieSave(movie);
      setIsSaved(!isSaved);
    }
  }

  React.useEffect(() => {
    savedMovie ? setIsSaved(true) : setIsSaved(false);
  }, [savedMovie]);

  return (
    <li className="movies__list-item">
      
      <div className="movies__list-description" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h2 className="movies__list-title">{name}</h2>
        <p className="movies__list-duration">{setTimeFormat(duration)}</p>
        {
          saved ? <button type="button" className={`movies__list-delete-button ${isBtnDelete && 'movies__list-delete-button_visible'}`} onClick={handleMovieDeleteClick}></button>
                : <button type="button" className={`movies__list-like-button ${isSaved ? 'movies__list-like-button_clicked' : ''}`} onClick={handleMovieLikeClick} ></button>
        }
      </div>
      <a href={trailerLink} target="_blank" rel="noreferrer" className="movies__trailer-link">
        <img className="movies__list-poster" alt={`Постер фильма "${name}"`} src={linkImage} />
      </a>
    </li>
  );
}

export default MoviesCard;
