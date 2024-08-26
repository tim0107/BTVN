const array = [
  { name: 'name1', count: 13 },
  { name: 'name3', count: 23 },
  { name: 'name1', count: 25 },
  { name: 'name2', count: 27 },
  { name: 'name3', count: 30 },
  { name: 'name2', count: 20 }
];


let result = array.reduce((acc,curr) => {
  if (acc[curr.name]){
    acc[curr.name].count += curr.count;
  
  } else {
    acc[curr.name] = { name: curr.name, count: curr.count };  }
  return acc;
},{});


console.log(Object.values(result));
