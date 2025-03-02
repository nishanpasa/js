create_bag_item();

function is_bag_emtpy() {
  if (bag_item_arr.length === 0) {
    return true;
  }
  else{
    return false;
  }
}

function create_bag_item() {
    let original_price = 0;
    let discount_amount = 0;

    if (bag_item_arr.length === 0) {
      document.getElementById('bag_items_container').innerHTML = `
      <div id="" class="bag-item-container">
      <a href="../index.html"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/source/6910d1112421559.6013fd8d41f44.jpg" class="w-100"></a>
      <p class="text-center text-muted">No Items in the BAG!!!</p>
      </div>
      `;

      document.getElementById('original_price').innerText =0;
      document.getElementById('discount_amount').innerText =0;
      document.getElementById('delivery_charge').innerText =0;
      document.getElementById('total_amount').innerText = 0;
    }
    else{

    bag_item_arr.forEach (item_id =>{

        let bag_item = items.find(bag_item => Number(bag_item.id) === item_id);   
        
        //sart for getting price details 
        original_price += bag_item.original_price;
        document.getElementById('original_price').innerText = original_price;
        
        individual_discount = (bag_item.discount_percentage/100) * bag_item.original_price ;
        discount_amount += individual_discount;
        document.getElementById('discount_amount').innerText =discount_amount;

        delivery_charge = 69;
        document.getElementById('delivery_charge').innerText =delivery_charge;

        total_amount = original_price - discount_amount + delivery_charge;
        document.getElementById('total_amount').innerText = total_amount;
        
        //end for getting price details 
        
        item_id = `
            <div id="${item_id}" class="bag-item-container">
              <div class="item-left-part">
                <img class="bag-item-img" src="../${bag_item.image}">
              </div>
              <div class="item-right-part">
                <div class="company">${bag_item.company}</div>
                <div class="item-name">${bag_item.item_name}</div>
                <div class="price-container">
                  <span class="current-price fw-bold">Rs ${bag_item.current_price}</span> |
                  <span class="original-price text-muted">Rs ${bag_item.original_price}</span>
                  <span class="discount-percentage text-success">(${bag_item.discount_percentage}% OFF)</span>
                </div>
                <div class="return-period">
                  <span class="return-period-days">${bag_item.return_period} days</span> return available
                </div>
                <div class="delivery-details">
                  Delivery by
                  <span class="delivery-details-days">${bag_item.delivery_date}</span>
                </div>
              </div>
    
              <div onclick= "remove_bag(${item_id})" class="remove-from-cart">X</div>
            </div>
        `;
        let bag_items_container = document.getElementById('bag_items_container');
    
        bag_items_container.innerHTML += item_id;    
    });
  }
    
    
};

//start remove bag from thte cart and array
function remove_bag(item_id) {    

    let removing_item = document.getElementById(item_id)
    removing_item.remove();

    let id_index = bag_item_arr.findIndex(item => item === item_id);

    bag_item_arr.splice(id_index,1);

    localStorage.setItem('bag_item_arr', JSON.stringify(bag_item_arr));

    

    // this item_id matches with which items.id ?
    // then give me the original price like items.original_price
    let removed_item = items.find(item => Number(item.id) === Number(item_id));


    let original_price_element = document.getElementById('original_price');
    let original_price_amount = original_price_element.innerText; 
    original_price_amount = Number(original_price_amount);        
    original_price_amount -= removed_item.original_price;
    original_price_element.innerText = original_price_amount;
    console.log(original_price_amount);

    let discount_price_element = document.getElementById('discount_amount');
    let discount_price_amount =discount_price_element.innerText;
    discount_price_amount = Number(discount_price_amount);

    


    let  current_discount_price_amount = (removed_item.discount_percentage / 100) * removed_item.original_price;

    discount_price_amount = discount_price_amount - current_discount_price_amount;
    discount_price_element.innerText = discount_price_amount;
    console.log(discount_price_amount);
    

    console.log(removed_item);

}
//end remove bag from thte cart and array





