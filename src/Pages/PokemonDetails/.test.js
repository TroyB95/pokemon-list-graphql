import React from "react";
import { render } from "enzyme";
import { MockedProvider } from "react-apollo/test-utils";
import gql from "graphql-tag";

import PokemonDetails from "./index";

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

const mocks = [
  {
    request: {
      query: getPokemonDetails,
      variables: {
        name: "Bulbasaur",
      },
    },
    result: {
      data: {
        pokemon: {
          image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
          name: "Bulbasaur",
          number: "001",
          resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
          types: ["Grass", "Poison"],
          weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
        },
      },
    },
  },
];

describe("Pokemon Details", () => {
  it("renders without errors", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonDetails
          match={{
            params: {
              pokemonName: "Bulbasaur",
            },
          }}
        />
      </MockedProvider>
    );
  });
});
