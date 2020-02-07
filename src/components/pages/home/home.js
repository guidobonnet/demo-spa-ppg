import React from 'react';
import {useSelector} from 'react-redux';
import Loader from '../../Loader';
import {Link} from 'react-router-dom';
import groupBy from '../../../utils/groupBy';

const SHOW_ID = 6771;

const Home = () => {
  const show = useSelector((state) => state.shows[SHOW_ID]);

  const toggleActive = (e) => {
    e.currentTarget.parentElement.classList.toggle('-active')
  };

  if (!show)
    return <Loader />;

  return (
    <article className="container">
      <section className="section series-overview">
        <img className="series-poster" alt={`${show.name}'s poster`} src={show.image.medium} />

        <div className="series-data">
          <h1>{show.name}</h1>
          <div dangerouslySetInnerHTML={{__html: show.summary}} />
        </div>
      </section>

      <section className="section series-episodes">
        <h2 className="section-title">Episodes</h2>
        {Object.entries(groupBy(show.episodes, 'season')).map(([season, episodes]) => (
          <div className="season" key={season}>
            <h3 className="season-name" onClick={toggleActive}>Season {season}</h3>
            <ul className="episode-list">
              {episodes.map((episode) => (
                <li className="episode" key={episode.id}>
                  <Link className="episode-link" to={`/episode/${show.id}/${episode.id}`}>S{season}E{episode.number} - {episode.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Home;