const products = [
    {
        title: "Bolos decorados",
        images: [
            { src: "images/bolo-decorado1.jpg", alt: "Bolo decorado1" },
            { src: "images/bolo-chocolate.jpg", alt: "Bolo decorado2" }
        ]
    },
    {
        title: "Tortas",
        images: [
            { src: "images/bolo-morango.jpg", alt: "Bolo de Morango" },
            { src: "images/bolo-chocolate.jpg", alt: "Bolo de Chocolate" }
        ]
    },
    {
        title: "Doces finos",
        images: [
            { src: "images/doces-finos1.jpg", alt: "Doces finos1" },
            { src: "images/doces-finos2.jpg", alt: "Doces finos2" },
            { src: "images/doces-finos3.jpg", alt: "Doces finos3" }
        ]
    }
];

const container = document.getElementById('products-container');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const carrosselHtml = document.createElement('div');
    carrosselHtml.className = 'carrossel-html';

    const fotos = document.createElement('div');
    fotos.className = 'fotos';

    product.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        fotos.appendChild(img);
    });

    const prevButton = document.createElement('button');
    prevButton.className = 'prev';
    prevButton.innerHTML = '&#10094;';
    prevButton.onclick = () => mover(-1, prevButton);

    const nextButton = document.createElement('button');
    nextButton.className = 'next';
    nextButton.innerHTML = '&#10095;';
    nextButton.onclick = () => mover(1, nextButton);

    carrosselHtml.appendChild(fotos);
    carrosselHtml.appendChild(prevButton);
    carrosselHtml.appendChild(nextButton);

    const title = document.createElement('h3');
    title.textContent = product.title;

    productCard.appendChild(carrosselHtml);
    productCard.appendChild(title);

    container.appendChild(productCard);
});