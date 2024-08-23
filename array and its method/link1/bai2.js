const team = [
    { name: "Công Phượng", country: "Việt Nam" },
    { name: "Ronaldo", country: "Portugal" },
    { name: "Quang Hải", country: "Việt Nam" },
    { name: "Messi", country: "Argentina" },
    { name: "Nani", country: "Portugal" },
];

function groupCountry(team) {
    return team.reduce((acc, element) => {
        if (element.country === "Việt Nam") {
            acc.vietnam.push({ Ten: element.name, Country: element.country });
        } else if (element.country === "Portugal") {
            acc.portugal.push({ Ten: element.name, Country: element.country });
        } else if (element.country === "Argentina") {
            acc.argentina.push({ Ten: element.name, Country: element.country });
        }
        return acc;
    }, { vietnam: [], portugal: [], argentina: [] });
}

let groupedTeam = groupCountry(team);
console.log(groupedTeam);
