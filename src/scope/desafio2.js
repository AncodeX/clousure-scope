function createPetList() {
    let petList = [];
    function addPetList(pet) {
        if (pet !== undefined) {
            petList.push(pet);
        }
        console.log(petList);
    }
    return addPetList;
}

const myPetList = createPetList();
myPetList("Michi");
myPetList("Firulais");
myPetList();
