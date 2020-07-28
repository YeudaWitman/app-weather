import React from 'react';
import SuggestionsListItem from './SuggestionsListItem';

const SuggestionsList = ({list, handleCloseList}) => {
    return list.map((city) => 
      <SuggestionsListItem 
        key={city.Key} 
        handleClose={handleCloseList} 
        city={city} 
      />
    )
}

export default SuggestionsList;