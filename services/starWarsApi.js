const fetch = require('node-fetch');

const starWarsSpecies = async personId => {
  const response = await fetch(`https://swapi.co/api/species/${personId}`);

  // console.log(response.json);

  const species = await response.json();

  return species;
};

module.exports = { starWarsSpecies };
