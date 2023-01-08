const cart = [];
retrieveItemsFromLocalstorage()

// Récupération des mes appareils via le localStorage

function retrieveItemsFromLocalstorage() {
    const numberItems = localStorage.length

    for (let i = 0; i < numberItems; i++) {
        const item = localStorage.getItem(localStorage.key(i)) || ""
        const itemObject = JSON.parse(item)
        cart.push(itemObject)
        makeArticle(itemObject)
        displayItem(itemObject);
        
    };
}
function displayItem(itemObject) {
    const article = makeArticle(itemObject)
    const div = makeImageDiv(itemObject)
    article.appendChild(div)
    const cardItemContent = makeDescription(itemObject)
    article.appendChild(cardItemContent)
    displayArticle(article)
    displayTotalPrice()
    displayQuantite()
    // changeQuantity(itemObject)
}


function makeArticle(itemObject) {
    const article = document.createElement("article")
    article.classList.add("card__item")
    article.dataset.id = itemObject.id
    article.dataset.lense = itemObject.lense
    return article
}

function makeImageDiv(itemObject) {
    const div = document.createElement('div');
    div.classList.add("cart__item__img")

    const img = document.createElement('img');
    img.src = itemObject.imageUrl;
    div.append(img);
    return div

}

function displayArticle(article) {
    document.querySelector("#cart__items").appendChild(article);
}

function makeDescription(itemObject) {

    const div = document.createElement("div")
    div.classList.add("card__item__content")

    const settings = makeSettings(itemObject)
    div.appendChild(settings)

    const description = document.createElement("div")
    description.classList.add("card__item__content__description")

    const h2 = document.createElement("h2")
    h2.textContent = itemObject.name
    const p = document.createElement('p')
    p.textContent = itemObject.lense
    const p2 = document.createElement("p")
    p2.textContent = itemObject.price + "€"

    description.appendChild(h2)
    description.appendChild(p)
    description.appendChild(p2)
    div.appendChild(description)
    return div
}

function makeSettings(itemObject) {
    const settings = document.createElement("div")
    settings.classList.add("cart__item__content__settings")
    addQuantityToSettings(settings, itemObject)
    deleteQuantity(settings)
    return settings
}

function addQuantityToSettings(settings, itemObject) {
    const quantity = document.createElement("div")
    quantity.classList.add("cart__item__content___settings__quantity")
    const p = document.createElement("p")
    settings.innerText = "Qté :"
    quantity.appendChild(p)
    const input = document.createElement("input")
    input.type = "number"
    input.classList.add("itemQuantity")
    input.name = "itemQuantity"
    input.min = "1"
    input.max = "100"
    input.addEventListener('change',() =>  updatePriceAndQuantity(itemObject.id, input.value, itemObject))

    input.value = itemObject.quantity
    settings.appendChild(input)

}

function updatePriceAndQuantity( id, newValue, itemObject) {
    let itemToUpdate = cart.find((item)=> item.id === id)
    itemToUpdate.quantity = Number(newValue)
    console.log({itemToUpdate});
    console.log({newValue});
    displayTotalPrice()
    displayQuantite()
    saveNewDataCacheLocalStorage(itemObject)
}

function saveNewDataCacheLocalStorage(itemObject) {
    const dataToSave = JSON.stringify(itemObject)
    console.log({dataToSave});
    localStorage.setItem(itemObject.id, dataToSave)
}

function deleteQuantity(settings) {
    const div = document.createElement('div');
    div.classList.add('cart__item__content__settings__delete')
    const p = document.createElement('p')
    p.classList.add('deleteItem')
    p.textContent = 'Supprimer'
    div.appendChild(p)
    settings.append(div)

}


function displayTotalPrice() {
    let total = 0;
    const totalPrice = document.getElementById('totalPrice')
    cart.forEach((element) => {
        const totalUnitPrice = element.price * element.quantity
        total += totalUnitPrice
    })
    totalPrice.textContent = total;

}

function displayQuantite() {
    let totalQuantity = 0;
    const quantity = document.getElementById('totalQuantity')
    cart.forEach((element) => {
        totalQuantity += element.quantity;
        quantity.innerHTML =totalQuantity;
    })
}

    const input = document.querySelector('.itemQuantity')

 
