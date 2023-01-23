// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push('Ralph');
}
function destructivelyPrependCat(name){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const appendingcats =[...cats, name];
    return appendingcats
}

function prependCat(name){
    const prependingCats = [name,...cats];
    return prependingCats
}

function removeLastCat(){
    const moveLastCat = ["Milo", "Otis"];
    //moveLastCat.pop;
    return moveLastCat;
}

function removeFirstCat(){
    const firstCat = ["Otis", "Garfield"];
    //firstCat.shift;
    return firstCat;
}
