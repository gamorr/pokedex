// Programmed by Gavin Cowan and Gavin Morrow

import Pokedex from "pokedex-promise-v2";
import readline from "readline";

const rl = readline.createInterface(process.stdin, process.stdout);

const pokedex = new Pokedex();
run(); //run our program

function showMenu() {
    //display all menu options
    console.log("\nHere are your options: ");
    console.log("1: Search for a Pokemon.");
    console.log("2: Search for an Item.");
    console.log("3: Search for a Pokemon Move.");
    console.log("4: End search.");
}

function prompt(cb) {
    //use readline to ask user for search term
    rl.question("What do you want to search for? ", (response) => {
        cb(response);
    });
}

async function searchPoke(term) {
    //queries API for what poke user decides to enter
    try {
        const response = await pokedex.getPokemonByName(term); //query API for a response
        printPoke(response); //print response in a neat way
    } catch (error) {
        console.error("Error:", error);
    } finally {
        run();
    }
}

function printPoke(json) {
    //print data from pokemon in neat and clean way
    console.log("Name: " + json.name);
    console.log("Pokedex Number: " + json.id);
    console.log("Height: " + json.height / 10 + " m");
    console.log("Weight: " + json.weight / 10 + " kg");

    console.log("Type/s:");
    for (const key of json.types) {
        const type = key.type.name;
        console.log("\t" + type);
    }

    console.log("Abilities:");
    for (const key of json.abilities) {
        const abil_name = key.ability.name;
        console.log("\t" + abil_name);
    }
}

async function searchItem(term) {
    //queries API for what poke user decides to enter
    try {
        const response = await pokedex.getItemByName(term); //query API for a response
        printItem(response); //print response in a neat way
    } catch (error) {
        console.error("Error:", error);
    } finally {
        run();
    }
}

function printItem(json) {
    //prints item data neatly pick 4 fields to display from endpoint's data
    console.log("Item name: " + json.name);
    console.log("Item type: " + json.category.name);
    console.log("Item cost: " + json.cost);
    console.log("Effect:");
    for (const key of json.effect_entries) {
        const effect = key.effect;
        console.log("\t" + effect);
    }
}

async function searchMove(term) {
    try {
        const response = await pokedex.getMoveByName(term); //query API for a response
        printMove(response); //print response in a neat way
    } catch (error) {
        console.error("Error:", error);
    } finally {
        run();
    }
}

function printMove(json) {
    //prints move data in neat way

    console.log("Name: " + json.name);
    console.log("Power: " + json.power);
    console.log("Accuracy: " + json.accuracy);
    console.log("PP: " + json.pp);
    console.log("Type: " + json.type.name);
    console.log("Damage type: " + json.damage_class.name);
    console.log("Description:");
    for (const key of json.effect_entries) {
        const effect = key.effect;
        console.log("\t" + effect);
    }
}

function run() {
    //calls showMenu(), uses readline to ask user to enter their choice.
    //we will call prompt function and pass it to the name of the function we want to use
    showMenu();
    rl.question("What would you like to do? ", (response) => {
        switch (response) {
            case "1": // Searches for Pokemon on 1
                prompt(searchPoke);
                break;
            case "2": // Searches for Items on 2
                prompt(searchItem);
                break;
            case "3": // Searches for Moves on 3
                prompt(searchMove);
                break;
            case "4": // Quits searching on 4
                process.exit(0);
                break;
            default:
                console.log("Please choose from the list.");
                run();
        }
    });
}
