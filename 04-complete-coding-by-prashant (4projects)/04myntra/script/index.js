//start creating element  
function createElemnt() {
    items.forEach(item => {
        item = `
            <div class="col-md-3 mb-3 px-2 " >
                <div class="" >
                    <img class="w-100" src="${item.image}" alt="">
                    <div class="p-2" style="border:1px solid #cfcfcf">
                        <p class="pt-2 fw-bold mb-2 text-muted">${item.rating.stars}🌟| ${item.rating.count}k</p>
                        <h3 class="fw-bold fs-5">${item.company}</h3>
                        <p style="overflow:hidden; white-space:nowrap; text-overflow:ellipsis">${item.item_name}</p>
                        <p><span class="fw-bold fs-6">Rs ${item.current_price}</span> <span class="text-muted ps-2">Rs. ${item.original_price}</span> <span class="text-danger">(${item.discount_percentage}% OFF)</span></p>
                        <button id="add_to_bag" onclick="add_to_bag(${item.id})" class="btn btn-success w-100">Add to Bag</button>
                    </div>
                </div>
            </div>
        `;

        items_container = document.getElementById('items_container');        

        if (!items_container) {
            return;
        }
        items_container.innerHTML += item;
    })
};
//end creating element  


// start bag counter
let bag_item_arr = JSON.parse(localStorage.getItem('bag_item_arr')) || [];
let bag_counter_element = document.getElementById('bag_counter');

function bag_counter_visibility() {
    if (bag_item_arr.length > 0) {
        bag_counter_element.innerText = `${bag_item_arr.length}`;
        bag_counter_element.style.display = "block";
    } else {
        bag_counter_element.style.display = "none";
    }
}

function add_to_bag(items) {
    bag_item_arr.push(items);   
    localStorage.setItem('bag_item_arr', JSON.stringify(bag_item_arr));

    // let bag_item_arr = JSON.parse(localStorage.getItem('bag_item_arr'));
    bag_counter_element.innerText = `${bag_item_arr.length}`;
    bag_counter_visibility();
}

//end bag counter 


//start onload function 
onLoad();
function onLoad() {
    createElemnt();
    bag_counter_visibility();
}
//end onload function 



