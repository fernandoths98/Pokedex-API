import './Card.css';
import { Link } from "react-router-dom";

const Card = ({poke, index}) => {
    return ( 
        <Link to={`/${poke.name}`} className="card">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index
              }.png`}
              alt={poke.name}
            />
            <p>{poke.name}</p> 
          </Link>
     );
}
 
export default Card;