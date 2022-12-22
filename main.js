let students = [
    {
        name: "Shakhboz",
        age: 18,
        gender: "m"
    },
    {
        name: "Alexandr",
        age: 32,
        gender: "m"
    },
    {
        name: "Daler",
        age: 15,
        gender: "m"
    },
    {
        name: "Muzaffar",
        age: 19,
        gender: "m"
    },
    {
        name: "Eldor",
        age: 16,
        gender: "m"
    },
    {
        name: "Ibragim",
        age: 14,
        gender: "w"
    },
    {
        name: "Ravshan",
        age: 18,
        gender: "m"
    },
    {
        name: "Timur",
        age: 19,
        gender: "w"
    },
    {
        name: "Aziz",
        age: 15,
        gender: "w"
    },
    {
        name: "Darya",
        age: 26,
        gender: "w"
    },
    {
        name: "Mukhlisa",
        age: 16,
        gender: "w"
    }
]

let userNeeds = prompt('Who about do you need information?').toLowerCase()

students.filter(item => {
    if(userNeeds === item.name.toLowerCase()){
        let info = 
        confirm(
            `
                Name: ${item.name}
                Age: ${item.age}
                Gender: ${item.gender}

                Do you want to delete this object?
            `
        )

        if(info === true) {
            userNeeds.slice(item)
        }
    }
})





// let totalAge = students.reduce((prev, item) =>  {
//     return prev + item.age
// }, 0)

// let average = totalAge / students.length

// console.log(average);


// 1
// let name = prompt('any name') // Alexandr

// Удаление этого объекта



// let totalAge = students.reduce((prev, item) => {
//     return prev + item.age
// }, 0)

// let average = totalAge / students.length


// let m = 0
// let w = 0
// let n = 0

// students.filter(student => {
//     if(student.gender === 'm') {
//         m++
//     } else if (student.gender === 'w') {
//         w++
//     } else {
//         n++
//     }
// } )