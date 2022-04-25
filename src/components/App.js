import React from 'react';
import ItemsList from './ItemsList';

const App = () => {
  return(
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <ItemsList />
        </div>
      </div>
    </div>
  )
}

export default App;