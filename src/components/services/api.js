
const getData = () => {
    return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
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