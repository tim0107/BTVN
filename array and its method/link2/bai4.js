const array = [
    { name: 'name1', count: 13 },
    { name: 'name3', count: 23 },
    { name: 'name1', count: 25 },
    { name: 'name2', count: 27 },
    { name: 'name3', count: 30 },
    { name: 'name2', count: 20 }
  ];
  
  const result = array.reduce((acc, item) => {
    const existingItem = acc.find(element => element.name === item.name);
    
    if (existingItem) {
      existingItem.count += item.count;
    } else {
      acc.push({ name: item.name, count: item.count });
    }
  
    return acc;
  }, []);


  console.log(result);
  