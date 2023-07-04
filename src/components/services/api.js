
const getData = () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
      const cleanData = data.results.map((object) => {
        return{
          image:object.image,
          name:object.name,
          species:object.species,
          id:object.id,
          status:object.status,
          origin:object.origin.name,
          episode:object.episode
          }
      });
      return cleanData;
      })
};
export default getData;