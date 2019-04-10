const { starWarsPerson } = require('../index');

// const fakeFetchLuke = url => {
//   expect(url).toBe('https://swapi.co/api/people/1');

//   return Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         name: 'Luke Skywalker',
//         mass: '77',
//         height: '172'
//       })
//   });
// };

const fakeFetchLuke = jest.fn().mockReturnValue(
  Promise.resolve({
    json: () =>
      Promise.resolve({
        name: 'Luke Skywalker',
        mass: '77',
        height: '172'
      })
  })
);

const fakeFetchC3PO = jest.fn().mockReturnValue(
  Promise.resolve({
    json: () =>
      Promise.resolve({
        name: 'C-3PO',
        mass: '75',
        height: '167'
      })
  })
);

const getStarWarsPerson = async (fakeFetch, personId) => {
  const person = await starWarsPerson(fakeFetch, personId);
  expect(fakeFetch).toBeCalledWith(`https://swapi.co/api/people/${personId}`);
  return person;
};

module.exports = { fakeFetchLuke, fakeFetchC3PO, getStarWarsPerson };
