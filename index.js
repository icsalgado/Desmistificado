const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'meow',
        type: 'cat',
        age: 2
    },
    {
        name: 'glup',
        type: 'fish',
        age: 1
    }
]

/*Filtrar pets com menos de 5 anos sem alterar o array original*/
const newPets = pets.filter((pet) => {
    return pet.age < 5
})
console.log(pets)
console.log(newPets)

/*Retornando apenas o nome de cada pet*/
const petNames = pets.map((pet) => {
    return pet.name
})
console.log(petNames)
/*Para ter o mesmo efeito com forEach*/
const forEachPetNames = [] 
pets.forEach((pet) => {
    forEachPetNames.push(pet.age)
    return pet.age
})
console.log(forEachPetNames)

/*Usando reduce para somar*/
const totalAge = pets.reduce((total, pet) => {
    console.log(`Total: ${total}`)
    console.log(`Pet: ${pet.name}`)
    return total + pet.age
}, 0)
console.log(totalAge)


