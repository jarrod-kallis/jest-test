// const fetch = require('node-fetch');

const { potentialEnergy } = require('./index');
const {
  getStarWarsPerson,
  fakeFetchLuke,
  fakeFetchC3PO
} = require('./test/utils');

it('gets Luke Skywalker', async () => {
  const luke = await getStarWarsPerson(fakeFetchLuke, 1);
  expect(luke.name).toEqual('Luke Skywalker');
  expect(Number(luke.mass)).toEqual(77);
  expect(Number(luke.height)).toEqual(172);
});

it('gets C-3PO (jest mock function)', async () => {
  const c3po = await getStarWarsPerson(fakeFetchC3PO, 2);
  expect(c3po.name).toEqual('C-3PO');
  expect(Number(c3po.mass)).toEqual(75);
  expect(Number(c3po.height)).toEqual(167);
});

it("gets Luke Skywalker's potential energy (async/await)", async () => {
  const luke = await getStarWarsPerson(fakeFetchLuke, 1);
  expect(potentialEnergy(luke.mass, luke.height)).toBe(129791.2);
});

it("gets Luke Skywalker's potential energy (promise)", () => {
  getStarWarsPerson(fakeFetchLuke, 1).then(luke =>
    expect(potentialEnergy(luke.mass, luke.height)).toBe(129791.2)
  );
});

it("gets Luke Skywalker's potential energy (done callback)", done => {
  getStarWarsPerson(fakeFetchLuke, 1).then(luke => {
    expect(potentialEnergy(luke.mass, luke.height)).toBe(129791.2);
    done();
  });
});

it('returns potential energy', () => {
  expect(potentialEnergy(1, 1)).toBe(9.8);
});
