const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 11,
        title: "nishan",
        category: "nishanCategory",
        price: 22.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const btnContainer = document.querySelector('.btn-container');

menuCategoryList = [];

menu.forEach(item => {
    menuCategoryList.push(item.category)
});


let menuCategory = []
menuCategoryList.forEach(category => {
    let unique = false;
    for (let i = 0; i < menuCategory.length; i++) {
        if (category === menuCategory[i]) {
            unique = true;
            break;
        }
    }
    if (!unique) {
        menuCategory.push(category);
        btnContainer.innerHTML += `
        <button id="all" onclick="getItem('${category}')">${category}</button>
        `
    }
});

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#all').click();   
});

function getItem(category) {
    document.querySelector('#itemContainer').innerHTML = '';

    menu.forEach(item => {
        if (category === '' || item.category === category) {
            document.querySelector('#itemContainer').innerHTML +=
                `
            <div class="col-md-6 mb-5">
                <div class="d-flex w-100">
                <div class="" style="width: 50%; border: 3px solid orange;">
                    <img style="object-fit: cover; max-height: 200px;" src="${item.img}" class="w-100" alt="">
                </div>
    
                <div class="ps-4" style="width: 50%;">
                    <div class="d-flex justify-content-between">
                    <h4 style="text-transform: capitalize;">${item.title}e</h4>
                    <p " class="fw-bold">$${item.price}</p>
                    </div>
                    <p style="text-transform: capitalize;">${item.desc}</p>
                </div>
                </div>
            </div>
            `;
        }
    });

}


/* */
let nameArray = ['ram', 'anuj','shyam', 'hari', 'ram', 'shyam', 'hari'];

let newArray = []
nameArray.forEach(element => {
    let unique = false;
    for (let i = 0; i < newArray.length; i++) {
        if (element === newArray[i]) {
            unique = true;
            break;
        }
    }
    if (!unique) {
        newArray.push(element);
    }
});
console.log(newArray);

