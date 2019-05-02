const starWarsSpecies = async personId => {
  let species = null;

  if (personId === 1) {
    species = Promise.resolve({
      name: 'Human',
      classification: 'mammal'
    });
  } else {
    species = Promise.resolve({
      name: 'Droid',
      classification: 'artificial'
    });
  }

  return await species;
};

module.exports = { starWarsSpecies };
