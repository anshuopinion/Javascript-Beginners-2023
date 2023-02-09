/* 

Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

1. `name`
2. `population`
3. `continent`

The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

*/
// "Paris has a population of 2,140,526 and is situated in Europe"
const data1 = {
  name: "Paris",
  population: "2,140,526",
  continent: "Europe",
};
const data2 = {
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia",
};
const data3 = {
  name: "New Delhi",
  population: "43,929,286",
  continent: "Asia",
};

const cityFacts = (cityData) => {
  return `${cityData.name} has a population of ${cityData.population} and is situated in ${cityData.continent}`;
};

console.log(cityFacts(data3));
