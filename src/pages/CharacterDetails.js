import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faHandSpock} from '@fortawesome/free-solid-svg-icons';
import{faSkullCrossbones} from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function CharacterDetails ({findCharacter}) {
    if(!findCharacter) {
        console.log("vacio")
        return (
            <section>
            Vacio
            </section>
        )
    }
    return (
    <section className="screen">
        <Link className="links" to={`/`}><p className="return"><FontAwesomeIcon className="arrow"icon={faChevronLeft} /> Volver</p></Link>
        <section className="imageBox">
            
            <img className="imageWindow" src= {findCharacter.image} alt={`Foto de ${findCharacter.name} `} />
            <div className="window">
            <h3 className="info infoName">{findCharacter.name}</h3>
            <p className="info statusLogo">Status : {findCharacter.status}{status()}</p>
            <p className="info">Especie : {findCharacter.species}</p>
            <p className="info">Origen : {findCharacter.origin}</p>
            <p className="info">Episodios : {findCharacter.episode.length}</p>
            </div>
        </section>
    </section>
    ) 

    function status () {
        const status = findCharacter.status;
        if (status=== "Alive"){
            return(
                <p><FontAwesomeIcon className="handLog" icon={faHandSpock} /> </p>
            )
        }else if(status=== "Dead") {
            return(
                <p><FontAwesomeIcon className="skullLog" icon={faSkullCrossbones} /></p>
            )           
        }
        else{
        <p className="info">Status : {findCharacter.status}</p>
        }
    }
}

export default CharacterDetails;