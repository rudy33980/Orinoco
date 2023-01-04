const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

// let params = (new URL(document.location)).searchParams;
// let a = params.get(_id);
// let age = parseInt(params.get('age')); // is the number 18

fetch(`http://localhost:3000/api/cameras/${id}`);

const description = donnee.description;
const lenses = donnee.lenses;
const name = donnee.name;
const price = donnee.price;
const _id = donnee._id;


const paragraph = document.createElement('div');
paragraph.append(description);