import { useState, useEffect } from 'react'
import { getPokemons } from './api/pokemon';
import './App.css';
import Card from './component/Card';
import List from './component/List';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [errorState, setErrorState] = useState({hasError: false})
  const [viewGrip, setViewGrip] = useState(true)

  const iniUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    getPokemons(iniUrl)
      .then(setPokemons)
      .catch(handleError)
  }, [])

  const handleError = (err) => {
    setErrorState({hasError: true, message: err.message})
  }

  function onChangePage(url) {
    getPokemons(url)
      .then(setPokemons)
      .catch(handleError)
  }

  return (
    <div className="App">
      {errorState.hasError && <div>{errorState.message}</div>}
      
      {viewGrip && (
        <div className='wrapper'>
          {pokemons?.results?.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name} image={pokemon.image}/>
          ))}
        </div>
      )}
      
      {!viewGrip && (
        <div className='content-list'>
          <div className='list'>
            {pokemons?.results?.map((pokemon) => (
              <List key={pokemon.name} name={pokemon.name} image={pokemon.image}/>
            ))}
          </div>
        </div>
      )}


      <div className='buttons'>
        {pokemons.previous && (
          <button onClick={() => onChangePage(pokemons.previous)} className='button'>Prev</button>
        )}
        {pokemons.next && (
          <button onClick={() => onChangePage(pokemons.next)} className='button'>Next</button>
        )}
        <button onClick={() => setViewGrip(!viewGrip)} className='button'>Change View</button>
      </div>
    </div>
  );
}

export default App;
