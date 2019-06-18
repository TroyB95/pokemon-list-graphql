import React from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

import Card from "../../Components/Card";
import Loading from "../../Components/Loading";

const getDataQuery = gql`
  query {
    pokemons(first: 151) {
      number
      name
      image
      id
    }
  }
`;

function HomePage(props) {
  if (props.data.loading) {
    return <Loading />;
  }

  return (
    <>
      {props.data.pokemons.map(pokemon => (
        <Link to={`/${pokemon.name}`} key={pokemon.id}>
          <Card cardImg={pokemon.image} cardName={pokemon.name} cardNumber={pokemon.number} />
        </Link>
      ))}
    </>
  );
}

export default graphql(getDataQuery)(HomePage);
