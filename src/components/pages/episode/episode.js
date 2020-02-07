import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Loader from '../../Loader';

const Episode = () => {
  const {showId, episodeId} = useParams();
  const show =  useSelector((state) => state.shows[showId]);
  const episode = useSelector(() => show && show.episodes.find((item) => item.id === Number(episodeId)));

  if (!show || !episode) return <Loader />;

  return (
      <article className="container">
        <section className="section episode-overview">
          <img className="episode-poster" alt={`${episode.name}'s poster`} src={episode.image.medium} />

          <div className="episode-data">
            <h2>{show.name}</h2>
            <h1>S{episode.season}E{episode.number} - {episode.name}</h1>
            <div dangerouslySetInnerHTML={{__html: episode.summary}} />
          </div>
        </section>
    </article>
  )
};

export default Episode;