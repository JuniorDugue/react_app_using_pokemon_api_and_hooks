import React from "react";
import { Route } from "react-router-dom";
// import Main from "./views/MainView";
import styled from "styled-components";
import Navigation from "./Navigation";
import PokemonList from "./PokemonList";

function Appp(props) {
  return (
    <ViewContainer>
      <Navigation />
      <Route exact path="/:type" component={PokemonList} />
    </ViewContainer>
  );
}

export default Appp;

const ViewContainer = styled.div`
  display: flex;
`;
