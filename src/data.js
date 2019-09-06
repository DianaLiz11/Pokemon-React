window.data = {

//Mostrar toda la Data
  showAllData: (dataPokemon) => {
    //const completeData = dataPokemon.map(({name,img}) => [name, img]);
    const completeData = dataPokemon.map(({id,name,img,height,weight,candy,egg,type}) => ({id,name,img,height,weight,candy,egg,type}));
    return completeData;
  },
//Filter by type
  filterByType: (dataPokemon,category) => {
  const filteredData = dataPokemon.filter(data =>(data.type.includes(category)));
  return filteredData;
  },
//Filter by letter search and name matching, on input type search
  filterByLetter: (dataPokemon, name) => {
    const concidence = dataPokemon.filter(data => (data.name.toLowerCase().match(name.toLowerCase())));
    return concidence;
  },
//Order data
  sortData: (dataPokemons,sortBy,sortOrder) => {
    dataPokemons.map(element => {
       element.height = parseFloat(element.height);
       element.weight = parseFloat(element.weight);
     });

    if (sortOrder == 'asc') {
      return dataPokemons.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
    }
    else if (sortOrder == 'desc') {
      return dataPokemons.sort((a, b) => (a[sortBy] < b[sortBy]) ?  1 : -1);
    } else {
      return dataPokemons;
    }
  },
//Show data values
  computeStats: (dataPokemons,valueItem) => {
    let arrayCandys = [];
    let result = {};
    dataPokemons.forEach(element => {
      if(element[valueItem] > 0){
        arrayCandys.push(element[valueItem])
      }
    });
//Show minimum, maximum and average of certain parameters
    const sum = arrayCandys.reduce((prev, next) => prev + next);
    const averageComplete = sum / arrayCandys.length;
    result.average = parseFloat(averageComplete.toFixed(2));
    result.minimum = Math.min.apply(null,arrayCandys);
    result.maximum = Math.max.apply(null,arrayCandys);

    return result;
  }
};
