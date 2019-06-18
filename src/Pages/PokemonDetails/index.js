import React from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

import Loading from "../../Components/Loading";

import "./styles.scss";

const getPokemonDetails = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      name
      number
      image
      types
      resistant
      weaknesses
    }
  }
`;

function PokemonDetails(props) {
  return (
    <Query query={getPokemonDetails} variables={{ name: props.match.params.pokemonName }}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return `Error! ${error}`;
        let pokemon = data.pokemon;

        return (
          <div className="pokemon-details">
            <img alt={`The pokemon ${pokemon.name}`} src={pokemon.image} />
            <h1>{pokemon.name}</h1>
            <p>{pokemon.number}</p>
            <Link className="pokemon-details__back-button" to="/">
              Back
            </Link>
            <div className="pokemon-details__stats">
              <ul>
                <h3>Types</h3>
                {pokemon.types.map((type, i) => {
                  return <li key={i}>{type}</li>;
                })}
              </ul>
              <ul>
                <h3>Resistances</h3>
                {pokemon.resistant.map((res, i) => {
                  return <li key={i}>{res}</li>;
                })}
              </ul>
              <ul>
                <h3>Weaknesses</h3>
                {pokemon.weaknesses.map((weakness, i) => {
                  return <li key={i}>{weakness}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      }}
    </Query>
  );
}

export default PokemonDetails;
