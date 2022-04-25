import React from 'react';
import ItemsList from './ItemsList';
import ItemDetail from './ItemDetail';

const App = () => {
  return(
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <ItemsList />
        </div>
        <div className="column eight wide">
          <ItemDetail />
        </div>
      </div>
    </div>
  )
}

export default App;