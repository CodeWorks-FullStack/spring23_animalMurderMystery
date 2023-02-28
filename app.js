console.log('hey are we linkin?')
//#region 
let catArr = [
    {
        name: 'Mittens',
        age: 13,
        color: 'Orange',
        happy: true,
        favoriteToys: ['knives', 'catnip', 'mice']
    },
    {
        name: 'Bean',
        age: 6,
        color: 'Black',
        happy: true,
        favoriteToys: ['lasers', 'feathers', 'sammy goose']
    },
    {
        name: 'Humphrey',
        age: 2,
        color: 'Grey Tabby',
        happy: false,
        favoriteToys: ['couch legs', 'litterbox', 'carpet']
    },
    {
        name: 'Chester',
        age: 17,
        color: 'Cheshire',
        happy: false,
        favoriteToys: ['cheetos']
    },
]
console.log(catArr, 'orig')

// NOTE anatomy of the for loop: declarization of variable, condition we want our for loop to run, and incrementer
for (let i = 0; i < catArr.length; i++) {
    // here 'i' is the position in our for loop, we can use this for accessing the position in the array
    console.log(catArr[i].name)
}

// NOTE a forEach iterates over 'each' index in an array. this does the same thing as lines 35-38
catArr.forEach(cat => console.log(cat.name, 'for eached'))

// NOTE example of anon fn inside of a forEach
catArr.forEach(cat => {
    cat.age++
    console.log(cat)
})

// NOTE 'find' returns a SINGLE object from the array based off of the condition provided
// here in this example 'cat' is banana word...this is the placeholder variable
let bean = catArr.find(cat => cat.name == 'Bean')

// if there is more than one item in the array that meets the condition, it will return the first one
let catByAge = catArr.find(cat => cat.age > 6)
console.log(catByAge, 'find cat by age')

// NOTE filter returns a new array based on provided condition, NOT a destructive action
let oldCats = catArr.filter(cat => cat.age > 6)
console.log(oldCats, 'old cats')

let happyCats = catArr.filter(cat => cat.happy)
console.log(happyCats, 'happy cats')

// '!' is called a bang and it will return the opposite value
let unhappyCats = catArr.filter(cat => !cat.happy)
console.log(unhappyCats, 'unhappy');

// NOTE 'sort' is a destructive action and will manipulate your array
// NOTE sort uses a compare fn that sorts based off of positive or negative values returned
let sortedCats = catArr.sort((catA, catB) => catB.age - catA.age)
console.log(sortedCats, 'sorted')

// NOTE map iterates through array and 'transforms' ea. index into something new
// map is NOT a destructive action...the original array will still persist
let kitties = catArr.map(cat => '😽' + cat.name)
console.log(kitties);


let fishies = ['🦈', '🐟', '🐡']
let sushi = fishies.map(f => '🍣')

//#endregion

// STUB application code

let animals = [
    {
        name: 'Mittens',
        emoji: '😼',
        mammal: true,
        age: 13,
        diet: ['fish', 'meats'],
        weapon: 'knives',
        guilty: false
    },
    {
        name: 'Danger',
        emoji: '🐍',
        mammal: false,
        age: 2,
        diet: ['rodents', 'vegetables', 'meats'],
        weapon: 'steel toed boot',
        guilty: false
    },
    {
        name: 'Moo',
        emoji: '🐮',
        mammal: true,
        age: 6,
        diet: ['vegetables', 'fruits'],
        weapon: 'blowdart',
        guilty: false
    }
]

let animalElem = document.getElementById('animals')
function drawAllAnimals() {
    // look at all the animals
    // target my HTML doc
    // put the animals into the HTML
    console.log('drawing animals')
    // NOTE template serves as our placeholder for ea. iteration
    let template = ''
    animals.forEach(a => {
        template += a.emoji
    })
    // after iterating through all of the elements, draw my placeholder to the page
    animalElem.innerText = template
}

// NOTE drawSuspects accepts an array; arguments are passed by reference and parameters read values
// NOTE drawSuspects does the same thing as lines 143-146 and 153-155... this is a refactored callback function
function drawSuspects(suspectsArray) {
    console.log(suspectsArray, 'suspects');
    let template = ''
    suspectsArray.forEach(s => template += s.emoji)
    animalElem.innerText = template
}

function filterMammals() {
    let mammals = animals.filter(a => a.mammal == true)
    console.log(mammals, 'mammals');
    // let template = ''
    // mammals.forEach(m => template += m.emoji)
    // animalElem.innerText = template
    // NOTE here we are passing down an argument... we are passing the filtered array to our draw fn
    drawSuspects(mammals)
}

function filterNotMammals() {
    let notMammals = animals.filter(a => !a.mammal)
    console.log(notMammals, 'not mammals');
    // let template = ''
    // notMammals.forEach(nm => template += nm.emoji)
    // animalElem.innerText = template
    drawSuspects(notMammals)
}

// NOTE this function will only filter out the veggie eaters
// NOTE without the use of params/arguments, we would need a function for each diet type such as this
function filterVeggieEaters() {
    // debugger
    // console.log('veggie eaters')
    // NOTE 'includes' is another array method that will provide 
    let veggieEaters = animals.filter(a => a.diet.includes('vegetables'))
    console.log(veggieEaters, 'veggie eaters')
}


// NOTE food is a banana word, it will take on the value of whatever is passed when the fn is invoked
// NOTE food will be whatever value I put in the () when I invoked the function
function filterEaters(food) {
    // NOTE console log your parameter to verify that you got a value, and it is the value you expected
    console.log(food)
    let eaters = animals.filter(a => a.diet.includes(food))
    console.log(eaters);
    drawSuspects(eaters)
}


function makeAMurderer() {
    // generate a random number from 0 to length of the array
    let randomIndex = Math.floor(Math.random() * animals.length)
    // console.log(randomIndex, 'random index');
    // get the animal by the random index
    let muderer = animals[randomIndex]
    console.log(muderer, 'murder');
    // assign animal as the murderer
    muderer.guilty = true
}

function getClue() {
    let murderer = animals.find(a => a.guilty == true)
    // console.log(murderer);
    let clues = ['age', 'diet', 'weapon', 'mammal']
    let randomIndex = Math.floor(Math.random() * clues.length)
    let randomClue = clues[randomIndex]
    // console.log(randomClue, 'random clue');
    let clueElem = document.getElementById('clues')
    clueElem.innerText = randomClue
    switch (randomClue) {
        case 'age':
            // NOTE innerHTML for rendering HTML elements, innerText for text inside of HTML elements
            clueElem.innerHTML = `<p>The murderer is ${murderer.age} years old</p>`
            break
        case 'diet':
            // clueElem.innerText = murderer.diet
            clueElem.innerHTML = `<p>The murderer eats ${murderer.diet.join(' and ')}</p>`
            break
        case 'weapon':
            // clueElem.innerText = murderer.weapon
            clueElem.innerHTML = `<p>The murderer used ${murderer.weapon}</p>`
            break
        case 'mammal':
            // clueElem.innerText = murderer.mammal
            // NOTE this is a ternary; after the question is true, after the colon is false
            clueElem.innerHTML = `<p>The murderer is ${murderer.mammal ? 'a mammal' : 'not a mammal'}</p>`
            break
    }

}


function accuse() {
    let accused = window.prompt("Who dun it?")
    console.log(accused);
    // NOTE find the animal that matches the user input based off of emoji or name
    // NOTE '||' says or
    let findAccused = animals.find(a => a.emoji == accused || a.name == accused)
    console.log(findAccused);
    // NOTE check to see if the found animal is guilty
    // NOTE you don't need to include '== true' 
    if (findAccused.guilty == true) {
        window.alert("you found them!")
    } else {
        window.alert("you are big dumb")
    }
}


makeAMurderer()
drawAllAnimals()
getClue()

