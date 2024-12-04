import Pokedex from "pokedex-promise-v2";
import readline from "readline";

const pokedex = new Pokedex();

function showMenu() {
    //display all menu options
}

function prompt(cb) {
    //use readline to ask user for search term
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
}
