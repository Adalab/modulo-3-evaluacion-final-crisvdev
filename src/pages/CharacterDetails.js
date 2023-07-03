import { Link } from "react-router-dom";

function CharacterDetails ({findCharacter}) {
    if(!findCharacter) {
        console.log("vacio")
        return (
            <section>
            Vacio
            </section>
        )
    }
    console.log("lleno")
    return (
    <section className="screen">
        <Link className="links" to={`/`}><p className="return">Volver</p></Link>
        <section className="imageBox">
            
            <img className="imageWindow" src= {findCharacter.image} alt={`Foto de ${findCharacter.name} `} />
            <div className="window">
            <h3 className="info">{findCharacter.name}</h3>
            <p className="info">Status : {findCharacter.status}</p>
            <p className="info">Especie : {findCharacter.species}</p>
            <p className="info">Origen : {findCharacter.origin}</p>
            <p className="info">Episodios : {findCharacter.episode.length}</p>
            </div>
        </section>
    </section>
    ) 
}
export default CharacterDetails;