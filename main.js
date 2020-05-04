function createDoctor(name, specialty, address) {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}
let doctor = createDoctor("John", "nothing", "nowhere")
console.log(doctor)

function createPet(name, breed) {
    return {
        name: name,
        breed: breed
    }
}
let BowWowKennels = [createPet("casey", "blue heeler"), createPet("charlie", "golden doodle"), createPet("casey", "blue heeler")]
console.log(BowWowKennels)