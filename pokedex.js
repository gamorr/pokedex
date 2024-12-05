import Pokedex from "pokedex-promise-v2";
const readline = required("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

const pokedex = new Pokedex();

function showMenu() {
    //display all menu options
    console.log("Here are your options: ");
    console.log("Option1\nOption2");
}

function prompt(cb) {
    //use readline to ask user for search term
    rl.question("What do you want to search for? ", (response) => {
        cb(response);
    });
}

function searchPoke(term) {
    //query API for particular pokemon (passed as term)
    //if valid response is received it will call printPoke(json) with the
    //json to print out the name, weight, height, base experience, and all the moves for that
    //Pokemon. It will then call run() again to reprompt.
}

function printPoke(json) {
    //print data from pokemon in neat and clean way
}

function searchItem(term) {
    //works exactly like searchPoke() function, except
    //searches the item endpoint for an item.
    //calls corresponding printItem(json) method
    //calls run() to reprompt
}

function printItem(json) {
    //prints item data neatly pick 4 fields to display from endpoint's data
}

function searchMove(term) {
    //works exactly like searchPoke() except searches move endpoint for a move
    //calls corresponding printMove(json) method
}

function printMove(json) {
    //prints move data in neat way, calls run() to reprompt
}

function run() {
    //calls showMenu(), uses readline to ask user to enter their choice.
    //we will call prompt function and pass it to the name of the function we want to use
    showMenu();
    rl.question("What would you like to do? ", (response) => {
        switch(response) {
            case "1" :
                prompt(searchPoke);
                break;
            case "2" :
                prompt(searchItem);
                break;
            case "3" :
                prompt(searchMove);
                break;
            default:
                console.log("Please choose from the list.");
                run();
        }
    });
}
