const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(queryString);
const produitId = urlParams.get('id');

let itemPrice = 0;
let imgUrl = 0;
let altText = 0;
let nameItem = 0;

// description // "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// imageUrl // "http://localhost:3000/images/vcam_1.jpg"
// lenses// (2) ['35mm 1.4', '50mm 1.6']
// name// "Zurss 50S"
// price // 49900
// _id  "5be1ed3f1c9d44000030b061"

fetch(`http://localhost:3000/api/cameras/${produitId}`)
    .then(data => data.json())
    .then(res => handleData(res))
    .catch(console.error)


function handleData(data) {
    const { description, imageUrl, lenses, name, price, _id } = data;
    itemPrice = price;
    imgUrl = imageUrl;
    nameItem = name;

    makeImage(imageUrl);
    makeDescription(description)
    makePrice(price);
    makeName(name);
    makeLenses(lenses)

}

const selector = document.getElementById('descriptif');

function makeImage(imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    selector.append(img)
    img.classList.add('picture')
    console.log(img);
}

function makeDescription(description) {
    const p = document.createElement('p');
    selector.appendChild(p);
    p.innerHTML = description;
    const selectorP = document.querySelector('p');
    selectorP.classList.add('paragraph')
}

function makeName(name) {
    const div = document.createElement('div');
    selector.append(name);
    div.classList.add('name');
    console.log(div);

}
function makePrice(price) {
    const prixAppareil = document.createElement('div');
    selector.append(price);
    prixAppareil.classList.add('price');
    console.log(prixAppareil);

}

function makeLenses(lenses) {
    const select = document.querySelector("#lenses");
    if (select != null) {
        lenses.map((lense) => {
            const option = document.createElement('option')
            option.value = lense
            option.textContent = lense;
            document.querySelector('select');
            select.appendChild(option);
        })

    }
}

const button = document.querySelector('button');
button.addEventListener('click', handleClick)

function handleClick() {
    const lense = document.querySelector("#lenses").value;
    const quantity = document.querySelector("#quantity").value;

    if (isOrderInValid(lense, quantity)) return
    saveOrder(lense, quantity)
    rediretToCart()
}


function saveOrder(lense, quantity) {
    const data = {
        id: produitId,
        lense: lense,
        quantity: Number(quantity),
        price: itemPrice,
        imageUrl: imgUrl,
        name: nameItem

    }
    localStorage.setItem(produitId, JSON.stringify(data));
}
function isOrderInValid(lense, quantity) {
    if (lense == null || lense === "" && quantity > 0 || quantity === "") {
        alert("Please select a lense and quantity")
        return true
    }
}

function rediretToCart() {
    window.location.href = "cart.html";
}