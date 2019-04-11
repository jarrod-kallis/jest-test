const { starWarsSpecies } = require('./starWarsApi');

jest.mock('./starWarsApi');

it('gets species of Luke Skywalker', async () => {
  const species = await starWarsSpecies(1);

  expect(species.name).toBe('Human');
});

it('gets species of C-3PO', async () => {
  const species = await starWarsSpecies(2);

  expect(species.name).toBe('Droid');
});
