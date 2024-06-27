
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomLocation(data) {
    let provinces = Object.keys(data.rwanda);
    let randomProvince = getRandomElement(provinces);
    
    let districts = Object.keys(data.rwanda[randomProvince]);
    let randomDistrict = getRandomElement(districts);
    
    let sectors = Object.keys(data.rwanda[randomProvince][randomDistrict]);
    let randomSector = getRandomElement(sectors);
    
    let cells = Object.keys(data.rwanda[randomProvince][randomDistrict][randomSector]);
    let randomCell = getRandomElement(cells);
    
    let villages = data.rwanda[randomProvince][randomDistrict][randomSector][randomCell];
    let randomVillage = getRandomElement(villages);
    
    return {
        Province: randomProvince,
        District: randomDistrict,
        Sector: randomSector,
        Cell: randomCell,
        Village: randomVillage
    };
}

function displayRandomLocation() {
    let location = getRandomLocation(data);
    console.log("Province: " + location.Province);
    console.log("District: " + location.District);
    console.log("Sector: " + location.Sector);
    console.log("Cell: " + location.Cell);
    console.log("Village: " + location.Village);
}

displayRandomLocation();
