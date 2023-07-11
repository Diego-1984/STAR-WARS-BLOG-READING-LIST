const getState = ({ getStore, setStore }) => {
  return {
    store: {
      character: [],
      characterDetails: {},
      planet: [],
      planetDetails: {},
      favorites: [],
    },
    actions: {
      fetchCharacter: async () => {
        const response = await fetch("https://www.swapi.tech/api/people");
        const data = await response.json();
        const character = await Promise.all(
          data.results.map(async (people) => {
            const peopleResponse = await fetch(people.url);
            return {
              ...(await peopleResponse.json()).result.properties,
              uid: people.uid,
            };
          })
        );

        setStore({ ...getStore(), character });
      },
      fetchCharacterDetails: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setStore({ characterDetails: response.result.properties });
          });
      },
      fetchPlanet: async() => {
       const response =  await fetch("https://www.swapi.tech/api/planets")
       const data = await response.json();
       const planet = await Promise.all(
         data.results.map(async (planet) => {
           const planetResponse = await fetch(planet.url);
           return {
             ...(await planetResponse.json()).result.properties,
             uid: planet.uid,
           };
         })
       );
       setStore({...getStore(), planet})
      },

      fetchPlanetDetails: (id) => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setStore({ planetDetails: response.result.properties });
          });
      },

      setFavorites: (fav) => {
        const store = getStore();
        if (!store.favorites.includes(fav)) {
          setStore({ favorites: [...store.favorites, fav] });
        }
      },

      deleteFavorite: (fav) => {
        const store = getStore();
        const newFavorite = [...store.favorites];
        const deletefav = newFavorite[fav];
        newFavorite.splice(fav, 1);
        setStore({ favorites: newFavorite });
      },
    },
  };
};

export default getState;
