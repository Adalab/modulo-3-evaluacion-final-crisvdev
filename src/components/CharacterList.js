import CharacterItem from "./CharacterItem";

function CharacterList ( {characterList}){


    const html = characterList.map((eachCharacter)=> (
        <li key={eachCharacter.id} className ="card"> 
        <CharacterItem eachCharacter={eachCharacter}/>
        </li>
    ));

    return(
    <ul className =" list">
      {html}
    </ul>
    );
}
export default CharacterList;