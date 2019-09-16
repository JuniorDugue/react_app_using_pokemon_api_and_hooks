import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

function PokemonList(props) {
  const [pokeList, setPokeList] = useState([]);

  let type = props.match.params.type;
  console.log(type);
  useEffect(() => {
    // update with type
    // fetch pokemon with that type
    console.log(`We've rendered because type changed to ${type}`);
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}`)
      .then(res => {
        // console.log(res);
        // res.data.pokemon
        setPokeList(res.data.pokemon.map(poke => poke.pokemon).slice(0,4));
      })
      .catch(console.log);
  }, [type]);

  console.log(pokeList);

  return (
    <ListContainer>
      {/* <p>PokemonList</p> */}
      {pokeList.map(poke => (
        <p key={poke.name}>{poke.name}</p>
      ))}
    </ListContainer>
  );
}

export default PokemonList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;
