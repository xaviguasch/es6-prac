let a = 'test'
const b = true
const c = 789
a = 'test2'


const {
    firstName,
    lastName,
    eyeColor
} = person

let {
    age
} = person


const okObj = {
    a,
    b,
    c
}

const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`

function isValidAge(age = 10) {
    return age
}

const sym = Symbol('This is my first Symbol')

const whereAmI = (username, location) => username && location ? 'I am not lost' : 'I am totally lost!'