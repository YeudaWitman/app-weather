import React from 'react';
import SuggestionsListItem from './SuggestionsListItem';

const SuggestionsList = ({list, handleClose}) => {
    return list.map((city) => 
      <SuggestionsListItem 
        key={city.Key} 
        handleClose={handleClose} 
        city={city} 
      />
    )
}

export default SuggestionsList;