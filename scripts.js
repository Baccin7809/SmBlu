document.addEventListener("DOMContentLoaded", () => {
    const products = {
        iphones: [
            { name: "iPhone 13", price: "R$ 7.000", image: "design/i13.jpg", link: "https://wa.me/5547984940503" },
            { name: "iPhone 13 Pro", price: "R$ 9.000", image: "design/i13.jpg", link: "https://wa.me/5547984940503" },
            { name: "iPhone 12", price: "R$ 5.500", image: "design/i12.jpg", link: "https://wa.me/5547984940503" },
            { name: "iPhone 12 Pro", price: "R$ 7.500", image: "design/i12.jpg", link: "https://wa.me/5547984940503" },
            { name: "iPhone 11", price: "R$ 4.500", image: "design/i11.jpg", link: "https://wa.me/5547984940503" },
            { name: "iPhone 11 Pro", price: "R$ 6.500", image: "design/i11.jpg", link: "https://wa.me/5547984940503" },
            { name: "iPhone XS", price: "R$ 3.500", image: "design/ixs.jpg", link: "https://wa.me/5547984940503" },
            { name: "iPhone XR", price: "R$ 3.000", image: "design/ixr.jpg", link: "https://wa.me/5547984940503" },
            { name: "iPhone X", price: "R$ 2.800", image: "design/ix.jpg", link: "https://wa.me/5547984940503" },
            { name: "iPhone SE", price: "R$ 1.500", image: "design/ise.jpg", link: "https://wa.me/5547984940503" }
        ],
        xiaomis: [
            { name: "Redmi 13C 6/128", price: "R$ 970,00", image: "design/redmi13c.jpg", link: "https://wa.me/5547984940503" },
            { name: "Redmi 13C 8/256", price: "R$ 1.050,00", image: "design/redmi13c.jpg", link: "https://wa.me/5547984940503" },
            { name: "Redmi 12 8/256", price: "R$ 1.130,00", image: "design/redmi12.jpg", link: "https://wa.me/5547984940503" },
            { name: "Note 13 Pro 4G 8/256", price: "R$ 1.700,00", image: "design/note13pro4g.jpg", link: "https://wa.me/5547984940503" },
            { name: "Note 13 Pro 5G 8/256", price: "R$ 1.950,00", image: "design/note13pro4g.jpg", link: "https://wa.me/5547984940503" },
            { name: "Note 13 8/256", price: "R$ 1.320,00", image: "design/note13pro.jpg", link: "https://wa.me/5547984940503" },
            { name: "Poco X6 5G 12/256", price: "R$ 1.950,00", image: "design/pocox6.jpg", link: "https://wa.me/5547984940503" },
            { name: "Poco X6 Pro 5G 12/512", price: "R$ 2.400,00", image: "design/pocox6pro.jpg", link: "https://wa.me/5547984940503" },
            { name: "Poco F5 12/256 5G", price: "R$ 2.450,00", image: "design/pocof5.jpg", link: "https://wa.me/5547984940503" },
            { name: "Poco F5 Pro 12/512 5G", price: "R$ 3.150,00", image: "design/pocof5.jpg", link: "https://wa.me/5547984940503" },
            { name: "Realme Note 50 4/128", price: "R$ 800,00", image: "design/realmenote50.jpg", link: "https://wa.me/5547984940503" },
            { name: "Realme C51 4/128 NFC", price: "R$ 890,00", image: "design/realmec51.jpg", link: "https://wa.me/5547984940503" },
            { name: "Realme C55 8/256 NFC", price: "R$ 1.140,00", image: "design/realmec55.jpg", link: "https://wa.me/5547984940503" },
            { name: "Realme C67 8/256 NFC", price: "R$ 1.215,00", image: "design/realmec55.jpg", link: "https://wa.me/5547984940503" },
            { name: "Realme 11 4G 8/256", price: "R$ 1.200,00", image: "design/realme11.jpg", link: "https://wa.me/5547984940503" },
            { name: "Realme 11 5G 8/256", price: "R$ 1.500,00", image: "design/realme11.jpg", link: "https://wa.me/5547984940503" },
            { name: "Poco M4 5G 4/64", price: "R$ 820,00", image: "design/pocom4.jpg", link: "https://wa.me/5547984940503" },
            { name: "Poco C65 6/128", price: "R$ 970,00", image: "design/pococ65.jpg", link: "https://wa.me/5547984940503" },
            { name: "Poco C65 8/256", price: "R$ 1.060,00", image: "design/pococ65.jpg", link: "https://wa.me/5547984940503" },
            { name: "Poco C65 8/256", price: "R$ 1.060,00", image: "design/pococ65.jpg", link: "https://wa.me/5547984940503" }
        ]
        ,
        
        outros: [
            { name: "OnePlus 9", price: "R$ 3.800,00", image: "design/sem.png", link: "https://wa.me/5547984940503" },
            { name: "OnePlus 9 Pro", price: "R$ 4.800,00", image: "design/sem.png", link: "https://wa.me/5547984940503" },
            { name: "Google Pixel 5", price: "R$ 3.500,00", image: "design/sem.png", link: "https://wa.me/5547984940503" },
            { name: "Google Pixel 4a", price: "R$ 2.500,00", image: "design/sem.png", link: "https://wa.me/5547984940503" },
            { name: "Fonte original 20W Apple", price: "R$ 300,00", image: "design/sem.png", link: "https://wa.me/5547984940503" },
            { name: "PS5", price: "R$ 3.675,00", image: "design/ps5.jpg", link: "https://wa.me/5547984940503" },
            { name: "HTV Stick", price: "R$ 850,00", image: "design/sem.png", link: "https://wa.me/5547984940503" },
            { name: "HTV8", price: "R$ 1.250,00", image: "design/sem.png", link: "https://wa.me/5547984940503" },
            { name: "BTV E13", price: "R$ 950,00", image: "design/sem.png", link: "https://wa.me/5547984940503" },
            { name: "BTV 13", price: "R$ 1.300,00", image: "design/sem.png", link: "https://wa.me/5547984940503" }
        ]
    };

    function createProductHTML(product) {
        return `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <a class="buy-button" href="${product.link}" target="_blank">Comprar via WhatsApp</a>
            </div>
        `;
    }

    const iphoneContainer = document.querySelector("#iphones .product-grid");
    const xiaomiContainer = document.querySelector("#xiaomis .product-grid");
    const outrosContainer = document.querySelector("#outros .product-grid");

    products.iphones.forEach(product => {
        iphoneContainer.innerHTML += createProductHTML(product);
    });

    products.xiaomis.forEach(product => {
        xiaomiContainer.innerHTML += createProductHTML(product);
    });

    products.outros.forEach(product => {
        outrosContainer.innerHTML += createProductHTML(product);
    });





});
