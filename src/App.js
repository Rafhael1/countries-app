import React, { useState } from 'react';

import Results from './components/Results/Results'

import './App.scss'

function App() {

  const [ search, setSearch ] = useState("")

  return (
    <div>
      <nav>
        <h1>Countries info </h1>
        <h5> by Rafhael Marques</h5>
      </nav>
      <div className="searchBar" >
       <input type="text" placeholder="Search..." onChange={e => setSearch(e.target.value)} />
      </div>
      <div>     
         <Results search={search} />
      </div>
    </div>
  );
}

export default App;
