const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      character: [],
      characterDetails: {},
      planet: [],
      planetDetails: {},
    },
    actions: {
      fetchCharacter: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setStore({ character: response.results });
          });
      },
      fetchCharacterDetails: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setStore({ characterDetails: response.result.properties });
          });
      },
      fetchPlanet: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setStore({ planet: response.results });
          });
      },
      fetchPlanetDetails: (id) => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setStore({ planetDetails: response.result.properties });
          });
      },
    },
  };
};

export default getState;
