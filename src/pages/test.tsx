
const FrenchVerbs = require('french-verbs');
const Lefff = require('french-verbs-lefff/dist/conjugations.json');



export default function Test() {
    

// elle est allée
console.log('je ' + FrenchVerbs.getConjugation(Lefff, 'finir', 'PRESENT', 2));
}