const API_URL = "https://ig-food-menus.herokuapp.com/<params>"

console.log(API_URL)

var burguers = document.querySelector('#burguers'); // Esto lo traigo del html donde cree el div

fetch('https://ig-food-menus.herokuapp.com/burgers')
    .then((response) => response.json())
    .then((data) => {
        console.log(data['0'])
        burguers.innerHTML = `
            <img src="${data['0'].img}">
            <p>Plato: ${data['0'].name} </p>
            <p>Procedencia: ${data['0'].country}</p>
            <p>Precio: $ ${data['0'].price}</p>
        
        `

    });


fetch('https://ig-food-menus.herokuapp.com/desserts')
    .then((response) => response.json())
    .then((data) => console.log(data));


fetch('https://ig-food-menus.herokuapp.com/drinks')
    .then((response) => response.json())
    .then((data) => console.log(data));

/*  ya estoy aqui*/