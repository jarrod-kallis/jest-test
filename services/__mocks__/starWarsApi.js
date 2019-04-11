const starWarsSpecies = async personId => {
  let species = null;

  if (personId === 1) {
    species = await Promise.resolve({
      name: 'Human',
      classification: 'mammal'
    });
  } else {
    species = await Promise.resolve({
      name: 'Droid',
      classification: 'artificial'
    });
  }

  return species;
};

module.exports = { starWarsSpecies };
