import Pokedex from "pokedex-promise-v2";
const readline = required("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

const pokedex = new Pokedex();

function showMenu() {
    //display all menu options
    console.log("Here are your options: ");
    console.log("1: Search for a Pokemon.");
    console.log("2: Search for an Item.");
    console.log("3: Search for a Pokemon Move.");
    console.log("4: End search.")
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

    run();
}

function printPoke(json) {
    //print data from pokemon in neat and clean way
    const temp = JSON.parse(json);
    console.log("Name: " + temp.name);
    console.log("Pokedex Number: " + temp.id);
    console.log("Height: " + temp.height + " ");
    console.log("Weight: " + (temp.weight/10) * 2.205 + " lbs");
    console.log("Species: " + temp.species.name);
    console.log("Abilities:");
    for(const key of temp[abilities]) {
        const name = temp[abilities][key][ability][name];
        console.log("\t" + name);
    }
}

function searchItem(term) {
    //works exactly like searchPoke() function, except
    //searches the item endpoint for an item.
    //calls corresponding printItem(json) method
    //calls run() to reprompt

    run();
}

function printItem(json) {
    //prints item data neatly pick 4 fields to display from endpoint's data
    const temp = JSON.parse(json);
    console.log("Item name: " + temp.name);
    console.log("Item type: " + temp.category.name);
    console.log("Item cost: " + temp.cost);
    console.log("Item effect: " + temp[effect_entries][0][effect]);
}

function searchMove(term) {
    //works exactly like searchPoke() except searches move endpoint for a move
    //calls corresponding printMove(json) method

    run();
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
            case "4" :
                exit("Quit out");
                break;
            default:
                console.log("Please choose from the list.");
                run();
        }
    });
}
