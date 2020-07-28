import React from 'react';

import SearchField from './searchField/SearchField.jsx';
import WeatherCard from './card/WeatherCard.jsx';

const Home = ({match}) => {
  const cityKey = match.params.key ? match.params.key: '215854';
  return (
    <div>
      <SearchField />
      <WeatherCard cityKey={cityKey} />
    </div>
  )
}

export default Home;