var populationArray = [],maxPopulation=10000,isOverPopulated=false;
populationArray = [200000,10000,3000,1222222,6666666],maxPopulation=10000,isOverPopulated=false;
populationArray[0] > maxPopulation?console.log("its larger") : (populationArray[0] === maxPopulation?console.log("its equal"):console.log("its smaller"));
populationArray[1] > maxPopulation?console.log("its larger") : (populationArray[1] === maxPopulation?console.log("its equal"):console.log("its smaller"));
populationArray[2] > maxPopulation?console.log("its larger") : (populationArray[2] === maxPopulation?console.log("its equal"):console.log("its smaller"));
populationArray[3] > maxPopulation?console.log("its larger") : (populationArray[3] === maxPopulation?console.log("its equal"):console.log("its smaller"));
populationArray[4] > maxPopulation?console.log("its larger") : (populationArray[4] === maxPopulation?console.log("its equal"):console.log("its smaller"));
if((((populationArray[2]+populationArray[3]+populationArray[4])<100000)&&(maxPopulation<100000))||(isOverPopulated===false)){console.log("Small cities!!!")
} else{console.log("Large cities!!!")
};