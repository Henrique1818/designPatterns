function fabricarPets(nome) {
    let pet = {}
    pet.nome = nome;

    return pet;
}

const pet1 = fabricarPets('Marley');
console.log(pet1);

const pet2 = fabricarPets('Biscoito');
console.log(pet2);

const createPets = name => ({
    name,
    getName: () => console.log(name) 
});

const myPet1 = createPets('Mimi');
myPet1.getName();

const myPet2 = createPets('Fifi');
myPet2.getName();
