const team = [
    { name: "Công Phượng", country: "Việt Nam" },
    { name: "Ronaldo", country: "Portugal" },
    { name: "Quang Hải", country: "Việt Nam" },
    { name: "Messi", country: "Argentina" },
    { name: "Nani", country: "Portugal" }
  ];
  
  const result = team.reduce((pre, curr) => {
    if (!pre[curr.country]) {
        pre[curr.country] = [curr];  
    } else {
        pre[curr.country].push(curr); 
    }
  
    return pre;
  }, {});
  
  console.log(result);
  