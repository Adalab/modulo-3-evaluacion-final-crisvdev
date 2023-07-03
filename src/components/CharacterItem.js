import { Link } from "react-router-dom";

function CharacterItem ({eachCharacter}){
    return(
        <section className="box">
            <Link className="links" to={`/character/${eachCharacter.id}`}>
            <img className="images"src= {eachCharacter.image} alt={`Foto de ${eachCharacter.name} `} />
            <h3 className="names">{eachCharacter.name}</h3>
            <p className="species">{eachCharacter.species}</p>
            </Link>
        </section>
    );
}
export default CharacterItem;