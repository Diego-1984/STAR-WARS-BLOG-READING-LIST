const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character:[]
			,
			characterDetails:{},
			
		},
		actions: {
			fetchCharacter:()=>{
				fetch("https://www.swapi.tech/api/people")
				.then(response=>response.json())
				.then(response=>{
					console.log(response)
					setStore({character:response.results})
				})
			},
			fetchCharacterDetails:(id)=>{
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then(response=>response.json())
				.then(response=>{
					console.log(response)
					setStore({characterDetails:response.result.properties})
				})
			}

		}
	};
};

export default getState;
