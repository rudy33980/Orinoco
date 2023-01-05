const url = 'http://localhost:3000/api/cameras';

// description // "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// imageUrl // "http://localhost:3000/images/vcam_1.jpg"
// lenses// (2) ['35mm 1.4', '50mm 1.6']
// name// "Zurss 50S"
// price // 49900
// _id // "5be1ed3f1c9d44000030b061"

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        container(data)
        console.log(data);
    }
    )
    .catch(function (error) { (console.log('error'))}
    );



function container(data) {
    data.forEach(donnee => {
        console.log('Appareil:', donnee);

        const imageUrl = donnee.imageUrl;
        const id = donnee._id;
        const name = donnee.name;
        const description = donnee.description;


        const linkA = makeLink(id);
        appendChildren(linkA)
        makeImage(imageUrl, linkA);
        makeH3(name, linkA);
        makeParagraphe(description, linkA)

    }
    )
}

function makeLink(imageId) {
    const link = document.createElement('a');
    link.href = `http://127.0.0.1:5500/produit.html?id=${imageId}`;
    return link

}

function appendChildren(linkA) {
    const displayCart = document.getElementById('cart');
    if (displayCart != null) {
        displayCart.appendChild(linkA)
    }

}

function makeImage(imageUrl, link) {
    const picture = document.createElement('img');
    link.appendChild(picture);
    picture.src = imageUrl

}

function makeH3(name, link) {
    const H3 = document.createElement("h3");
    link.appendChild(H3);
    H3.innerHTML = name;
    const selector = document.querySelector('h3');
    selector.classList.add('title');
    console.log(selector);


}

function makeParagraphe(description, link) {
    const p = document.createElement('p');
    link.appendChild(p);
    p.innerHTML = description;
    const selectorP = document.querySelector('p');
    selectorP.classList.add('paragraph')

}



