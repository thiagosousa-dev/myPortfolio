import PropTypes from "prop-types"
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({children}) {
  const [selectedPage, setSelectedPage] = useState('');
  const state = {
    selectedPage,
    setSelectedPage,
  }
  return ( 
    <AppContext.Provider value={ state }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider;