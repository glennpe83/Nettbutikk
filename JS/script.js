const products = [ 
    {
    name: "Volvo",
    color: "Gul", 
    year: 1999,
    distance: 14523,
    price: 199000,
    image: "./assets/images/volvo_gul.jpg"
}, 
{
    name: "Ford",
    color: "Rød", 
    year: 2010,
    distance: 15233,
    price: 299000,
    image: "./assets/images/ford_rod.jpg"
}, 
{
    name: "Peugeot",
    color: "Hvit", 
    year: 2005,
    distance: 34223,
    price: 149000,
    image: "./assets/images/peugeot_hvit.jpg"
}, 
{
    name: "Tesla",
    color: "Rød",                          
    year: 2020,
    distance: 1452,
    price: 149000,
    image: "./assets/images/tesla_rod.jpg"
}, 
{
    name: "Nissan",
    color: "Blå", 
    year: 2001,
    distance: 12323,
    price: 99999,
    image: "./assets/images/nissan_bla.jpg"
}, 
{
    name: "BMW",
    color: "Svart", 
    year: 2007,
    distance: 24523,
    price: 88000,
    image: "./assets/images/bmw_svart.jpg"
}, 
{
    name: "Audi",
    color: "Grå", 
    year: 2003,
    distance: 18523,
    price: 150000,
    image: "./assets/images/audi_gra.jpg"
}, 
{
    name: "VW",
    color: "Blå", 
    year: 2010,
    distance: 4523,
    price: 75000,
    image: "./assets/images/vw_bla.jpg"
}, 
{
    name: "Porsche",
    color: "Svart", 
    year: 2015,
    distance: 5523,
    price: 79000,
    image: "./assets/images/porsche_svart.jpg"
}, 
{
    name: "MG",
    color: "Orange", 
    year: 2022,
    distance: 1453,
    price: 82000,
    image: "./assets/images/mg_orange.jpg"
}, 
];


console.log(products);

//Hent containeren der produktene vil bli lagt til
const productsContainer = document.getElementById('products-container');

//Generer HTML for hvert produkt og legg dem til i HTML-dokumentet
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('products');


    //Legg til navn 
    const nameElement = document.createElement('h2');
    nameElement.textContent = product.name;
    productElement.appendChild(nameElement);

    //Legg til bilder
    const imageElement = document.createElement('img')
    imageElement.src = product.image;
    imageElement.style.width = '200px';
    imageElement.style.height = "200px";
    productElement.appendChild(imageElement);

    //Legg til årstall
    const yearElement = document.createElement('p');
    yearElement.textContent = `Årstall: ${product.year}`;
    productElement.appendChild(yearElement);

    //Legg til km-stand
    const distanceElement = document.createElement('p');
    distanceElement.textContent = `KM-stand ${product.distance}`;
    productElement.appendChild(distanceElement);
    

    //Legg til pris
    const priceElement = document.createElement('h3');
    priceElement.textContent = `Pris ${product.price} kroner`;
    productElement.appendChild(priceElement);
    

    productsContainer.appendChild(productElement);
});

function sortAlph() {
    products.sort(function(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });


    // Tøm containeren før du legger til de sorterte produktene
    productsContainer.innerHTML = '';

    // Legg til de sorterte produktene i HTML-dokumentet på nytt
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('products');

        //Legg til navn 
        const nameElement = document.createElement('h2');
        nameElement.textContent = product.name;
        productElement.appendChild(nameElement);

        //Legg til bilder
        const imageElement = document.createElement('img');
        imageElement.src = product.image;
        imageElement.style.width = '200px';
        imageElement.style.height = '200px';
        productElement.appendChild(imageElement);

        //Legg til årstall
        const yearElement = document.createElement('p');
        yearElement.textContent = `Årstall: ${product.year}`;
        productElement.appendChild(yearElement);

        //Legg til km-stand
        const distanceElement = document.createElement('p');
        distanceElement.textContent = `KM-stand ${product.distance}`;
        productElement.appendChild(distanceElement);
        

        //Legg til pris
        const priceElement = document.createElement('h3');
        priceElement.textContent = `Pris ${product.price} kroner`;
        productElement.appendChild(priceElement);
        

        productsContainer.appendChild(productElement);
    });
}

function sortYear() {
    products.sort(function(a,b){
        return a.year - b.year;
    }) ;

       // Tøm containeren før du legger til de sorterte produktene
       productsContainer.innerHTML = '';

       // Legg til de sorterte produktene i HTML-dokumentet på nytt
       products.forEach(product => {
           const productElement = document.createElement('div');
           productElement.classList.add('products');
   
           //Legg til navn 
           const nameElement = document.createElement('h2');
           nameElement.textContent = product.name;
           productElement.appendChild(nameElement);
   
           //Legg til bilder
           const imageElement = document.createElement('img');
           imageElement.src = product.image;
           imageElement.style.width = '200px';
           imageElement.style.height = '200px';
           productElement.appendChild(imageElement);
   
           //Legg til årstall
           const yearElement = document.createElement('p');
           yearElement.textContent = `Årstall: ${product.year}`;
           productElement.appendChild(yearElement);
   
           //Legg til km-stand
           const distanceElement = document.createElement('p');
           distanceElement.textContent = `KM-stand ${product.distance}`;
           productElement.appendChild(distanceElement);
           
   
           //Legg til pris
           const priceElement = document.createElement('h3');
           priceElement.textContent = `Pris ${product.price} kroner`;
           productElement.appendChild(priceElement);
           
   
           productsContainer.appendChild(productElement);
       });
}

function sortPrice(){
    products.sort(function(a,b) {
    return a.price - b.price;
    });
       // Tøm containeren før du legger til de sorterte produktene
       productsContainer.innerHTML = '';

       // Legg til de sorterte produktene i HTML-dokumentet på nytt
       products.forEach(product => {
           const productElement = document.createElement('div');
           productElement.classList.add('products');
   
           //Legg til navn 
           const nameElement = document.createElement('h2');
           nameElement.textContent = product.name;
           productElement.appendChild(nameElement);
   
           //Legg til bilder
           const imageElement = document.createElement('img');
           imageElement.src = product.image;
           imageElement.style.width = '200px';
           imageElement.style.height = '200px';
           productElement.appendChild(imageElement);
   
           //Legg til årstall
           const yearElement = document.createElement('p');
           yearElement.textContent = `Årstall: ${product.year}`;
           productElement.appendChild(yearElement);
   
           //Legg til km-stand
           const distanceElement = document.createElement('p');
           distanceElement.textContent = `KM-stand ${product.distance}`;
           productElement.appendChild(distanceElement);
           
   
           //Legg til pris
           const priceElement = document.createElement('h3');
           priceElement.textContent = `Pris ${product.price} kroner`;
           productElement.appendChild(priceElement);
           
   
           productsContainer.appendChild(productElement);
       });
}




