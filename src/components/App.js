
import { useEffect, useState } from 'react';
import getData from './services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';
//import CharacterItem from './CharacterItem';
import logo from '../components/images/logo-rick&morty.png'
import { Routes, Route, useLocation, matchPath, } from 'react-router-dom';
import CharacterDetails from '../pages/CharacterDetails';


function App() {

const [characterList, setCharacterList] = useState([]);
const [searchName, setSearchName] = useState('')
const [searchSpecies, setSearchSpecies] = useState('')


  useEffect( () => {
    getData ()
      .then((cleanData) => {
        setCharacterList(cleanData);
      });
  },[]);

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value)
  }
  const handleSearchSpecies = (ev) =>{
    setSearchSpecies (ev.target.value)
  }
  const filteredCharacters  = characterList
  .filter((eachCharacter)=> eachCharacter.name.toLowerCase().includes(searchName.toLowerCase()) )
  .filter((eachCharacter) => {
    if(searchSpecies=== ''){
      return true;
    }
    else{
      return eachCharacter.species ===searchSpecies;
    }
  });

const { pathname } = useLocation();
const route = matchPath('/character/:id',pathname);
const characterId = route !== null ? route.params.id: null;
const findCharacter = characterList.find((char)=> char.id=== parseInt(characterId));
console.log(characterList)
console.log("findcharacter:")
console.log(findCharacter)


  return (
    <section className="page">
      <header className="header">
        <div>
          <img className="logo" src={logo} alt="Rick & Morty"/>
        </div>
        <form className="form">
          <input 
            className ="input" 
            type="text"
            placeholder = " Buscar nombre"
            value={searchName}
            onChange={handleSearchName}>
          </input>
          <select 
            className="input"
            type="select"
            value={searchSpecies}
            onChange={handleSearchSpecies}>
            <option hidden value=''>Seleccionar especie</option>
              <option value=''>Todas las especies</option>
              <option value='Human'>Humanos</option>
              <option value='Alien'>Aliens</option>
          </select>
        </form>
      </header>
     <Routes>
      <Route path="/character/:id" element={<CharacterDetails findCharacter={findCharacter}/>}/>
      <Route path="/" element={<section> <CharacterList characterList={filteredCharacters}/> </section>}/>
    </Routes>
    </section>
  )
}


export default App;
