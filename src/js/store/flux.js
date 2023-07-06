const getState = ({ getStore, setStore }) => {
  return {
    store: {
      character: [],
      characterDetails: {},
      planet: [],
      planetDetails: {},
      favorites:[],
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

      setFavorites:(fav)=>{
        const store = getStore()
          if (!store.favorites.includes(fav)){
            setStore({favorites:[...store.favorites, fav]})
          }
      },

      deleteFavorite:(fav)=>{
        const store = getStore()
        const newFavorite = [...store.favorites]
        const deletefav = newFavorite [fav]
        newFavorite.splice(fav, 1)
        setStore({favorites:newFavorite})
      }
      
    },
  };
};

export default getState;
