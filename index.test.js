const fetch = require('node-fetch');

const { starWarsPerson, potentialEnergy } = require('./index');

const fakeFetch = url => {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        name: 'Luke Skywalker',
        mass: '77',
        height: '172'
      })
  });
};

it('gets Luke Skywalker', async () => {
  const luke = await starWarsPerson(fakeFetch, 1);
  expect(luke.name).toEqual('Luke Skywalker');
  expect(Number(luke.mass)).toEqual(77);
  expect(Number(luke.height)).toEqual(172);
});

it("gets Luke Skywalker's potential energy (async/await)", async () => {
  const luke = await starWarsPerson(fakeFetch, 1);
  expect(potentialEnergy(luke.mass, luke.height)).toBe(129791.2);
});

it("gets Luke Skywalker's potential energy (promise)", () => {
  return starWarsPerson(fakeFetch, 1).then(luke =>
    expect(potentialEnergy(luke.mass, luke.height)).toBe(129791.2)
  );
});

it("gets Luke Skywalker's potential energy (done callback)", done => {
  starWarsPerson(fakeFetch, 1).then(luke => {
    expect(potentialEnergy(luke.mass, luke.height)).toBe(129791.2);
    done();
  });
});

it('returns potential energy', () => {
  expect(potentialEnergy(1, 1)).toBe(9.8);
});
