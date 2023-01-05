const cart = [];
retrieveItemsFromLocalstorage()

function retrieveItemsFromLocalstorage () {
    const numberItems = localStorage.length
    console.log(numberItems);
    for (let i = 0; i < numberItems; i++) {
        const item = localStorage.getItem(localStorage.key(i))
        const itemObject = JSON.parse(item)
        cart.push(itemObject)
    };
}
displayItem() ;
function displayItem(item) {
    const article = makeArticle(item)
    console.log(article)
    const image = makeImage(item)
}
function makeArticle(item) {
    const article = document.createElement("article")
    article.classList.add("card__item")
    article.dataset.id = item.id
    article.dataset.lense=item.lense
    return article 
}
