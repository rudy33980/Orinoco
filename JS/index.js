const url = 'http://localhost:3000/api/cameras';

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        container(data)
    }
    )
    .catch(function (error) {
    });



function container(data) {
    data.map((donnee) => {

        const imageUrl = donnee.imageUrl;
        const _id = donnee._id;

        const displayCart = document.getElementById('cart');
        
        const picture = document.createElement('img');
        picture.setAttribute('src', imageUrl);
        displayCart.appendChild(picture);

        picture.addEventListener('click', (e) => {
            `<a href="/http://127.0.0.1:5500/produit.html?id=${_id}>`
        })
    }

    )
}





