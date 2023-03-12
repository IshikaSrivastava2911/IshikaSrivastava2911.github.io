//table array to store table objects

const tables=[
    {t_id:1, amount: 0.00, itemList:[]},
    {t_id:2, amount: 0.00, itemList:[]},
    {t_id:3, amount: 0.00, itemList:[]},
    {t_id:4, amount: 0.00, itemList:[]},
    {t_id:5, amount: 0.00, itemList:[]},
];

//menus array for all the menu items

const menus=[
    {menu_item:"French Fries",price: 120, type: "Starter"},
    {menu_item:"Paneer butter Masala",price: 250, type: "Main Course"},
    {menu_item:"Mojito",price: 150, type: "Beverages"},
    {menu_item:"Cheese Cake",price: 200, type: "Desserts"},
    {menu_item:"Mac-n-cheese",price: 200, type: "Starter"},
    {menu_item:"Pizza",price: 300, type: "Starter"},
    {menu_item:"Cake",price: 100, type: "Desserts"},
    {menu_item:"Chilli Paneer",price: 240, type: "Main Course"},
    {menu_item:"Orange juice",price: 80, type: "Beverages"},
    {menu_item:"Gulab Jamun",price: 50, type: "Desserts"},
    {menu_item:"Manchurian",price: 180, type: "Main Course"},
    {menu_item:"Maggie",price: 70, type: "Starter"},
    {menu_item:"Burger",price: 70, type: "Starter"},

];

//loading the table and menu when the webpage is loaded
// window.onload =()=>{
//     tableDisplay();
//     menuDisplay();
// }

//function to display tables
const tableDisplay=()=>{
    for( let i=0; i<tables.length; i++){
        //create div
        let eachTableNumber = document.createElement('div');
        //class
        eachTableNumber.className = "eachtable";
        //id
        eachTableNumber.id=`table${i+1}`;

        //for drop functionality
        eachTableNumber.addEventListener('dragover', (event)=>{
            // console.log("dragover");
            event.preventDefault();
            // drag(event);
        })

        //when item it dropped, drop function in invoked
        eachTableNumber.addEventListener('drop', (event)=>{
            // console.log("drop");
            drop(event);
        })

        //on click, openBill function is invoked
        eachTableNumber.addEventListener('click',openBill)



        //create a heading for table name
        let head= document.createElement('h4');
        //class
        head.className="table-head";
        head.innerHTML = `Table${tables[i].t_id}`;
        //make head a part of table elemeny
        eachTableNumber.appendChild(head);
        //p tag
        let pt=document.createElement('p');
        pt.id= `pTag${i+1}`;
        //span tag for price
        let priceItem = document.createElement('span');

        priceItem.className = "price";
        priceItem.id=`priceT${i+1}`;

        priceItem.innerHTML = `Rs. ${tables[i].amount} |`;

        

        //span for total number of items
        let tblTotalItem= document.createElement('span');

        tblTotalItem.className ="total";
        tblTotalItem.id=`TotalItems${i+1}`;

        tblTotalItem.innerHTML = `Total Items: ${tables[i].itemList.length}`;

        pt.appendChild(priceItem);
        pt.appendChild(tblTotalItem);

        eachTableNumber.appendChild(pt);

        document.getElementById('table-list').appendChild(eachTableNumber);
    }
};


//function for displaying Menu
const menuDisplay=()=>{
    for( let i=0;i<menus.length;i++ ){
        //create div
        let eachMenuItem = document.createElement('div');
        //class
        eachMenuItem.className= "item";
        //id
        eachMenuItem.id=`item${i+1}`;


        //call drag function
        eachMenuItem.addEventListener('dragstart',(event)=>{
            // console.log("dragStart");
            drag(event);
        })
        

        eachMenuItem.draggable="true";

        //dish name
        let dish= document.createElement('h2');

        dish.className="item-name"

        dish.innerHTML = menus[i].menu_item;

        eachMenuItem.appendChild(dish);

        //price of dish
        let item_price = document.createElement('h2');

        item_price.className ="item-price";

        item_price.innerHTML=`Rs. ${menus[i].price}`;

        eachMenuItem.appendChild(item_price);

        //cuisine category or dish category

        let category = document.createElement ('span');

        category.className="item-cate";

        category.innerHTML = menus[i].type;

        eachMenuItem.appendChild(category);

        //adding another class for each menu item
        // let classForDiv= `${menus[i].menu_item}${menus[i].type}`;
        // eachMenuItem.classList.add(classForDiv);

        document.getElementById("menu-list").appendChild(eachMenuItem);

    }

};





//search in table
const tableSearch =() => {
    //input item
    let search= document.getElementById('table-search')
    search = search.value.toLowerCase();
    // let ul = document.getElementsByClass('table-list');
    //getting table details
    let tableItem = document.getElementById('table-list');
    let eachItem = document.querySelectorAll(".eachtable");
    const itemName = tableItem.getElementsByTagName("h4");

    for(var i=0; i<itemName.length;i++){
        let match= eachItem[i].getElementsByTagName('h4')[0];

        if(match){
            let textVal= match.textContent || match.innerHTML;

            if(textVal.toLowerCase().indexOf(search) > -1){
                eachItem[i].style.display="block";
                
            }else{
                eachItem[i].style.display="none";
            }
        }
    }

}

//searching in menu list
const menuSearch=()=>{
    //input item
    let searchMenu= document.getElementById('menu-search')
    searchMenu = searchMenu.value.toLowerCase();
    
    //getting table details
    let menuItem = document.getElementById('menu-list');
    let eachMenuItem = document.querySelectorAll(".item");
    const menuName = menuItem.getElementsByTagName("h2");

    for(var i=0; i<menuName.length;i++){
        let matched= eachMenuItem[i].getElementsByTagName('h2')[0];
        let matched2 = eachMenuItem[i].getElementsByClassName('item-cate')[0];

        if(matched){
            let courseVal = matched2.textContent || matched2.innerHTML;
            let textValue= matched.textContent || matched.innerHTML;

            if(textValue.toLowerCase().indexOf(searchMenu) > -1){
                eachMenuItem[i].style.display="block";
               
            }
            else if(courseVal.toLowerCase().indexOf(searchMenu) > -1){
                eachMenuItem[i].style.display="block";
               
            }else{
                eachMenuItem[i].style.display="none";
            }
        }
    }


}



// //For DRAG AND DROP

// //select all the menu items and add dragstart event listener to them

// const menuItems = document.querySelectorAll('.item');

// menuItems.forEach(item =>{
//     item.addEventListener('dragstart',event =>{
//         event.dataTransfer.setData('itemName',item.dataset.menu_item);
//         event.dataTransfer.setData('itemPrice',item.dataset.price);
//     });

// });


// //Select all the table elemets and add dragover and drag drop event listener

// const tableItem = document.querySelectorAll('.eachtable');

// tableItem.forEach(table =>{
//     table.addEventListener('dragover', event =>{
//         event.preventDefault();
//         event.dataTransfer.dropEffect ='move';
//         table.classList.add('active');
//     });

//     table.addEventListener('drop', event=>{
//         event.preventDefault();
//         const itemName =event.dataTransfer.getData('itemName');
//         const itemPrice = parseFloat(event.dataTransfer.getData('itemPrice'));
//         const tableNumber = table.dataset.t_id;
//         // Update table order details
//         const itemCountElement = table.querySelector('.total');
//         const totalCostElement = table.querySelector('.price');
//         let itemCount = parseInt(itemCountElement.textContent);
//         let totalCost = parseFloat(totalCostElement.textContent);
//         itemCount++;
//         totalCost += itemPrice;




//         itemCountElement.textContent = itemCount;
//         totalCostElement.textContent = totalCost.toFixed(2);


//         table.classList.remove('active');
//     });
// });

// // let activeTable = null;




//drag function
const drag =(e)=>{
    // console.log("called drag");
    e.dataTransfer.setData("text", e.target.id);
};

//drop function
const drop =(e)=>{
    // console.log("called drop");
    e.preventDefault();

    //get item name
    var data = e.dataTransfer.getData("text");
    //get id
    let arr = data.split("");
    let item_id =arr[4];
// table1
    //table name
    let tableid = e.target.id;
    // console.log(tableid);
    
    // console.log("itemid: "+item_id);
    // calling upateItemList funtion
    updateMenuItemOnTable(tableid.slice(5),menus[item_id-1].menu_item,menus[item_id-1].price)
    // console.log("tablesliceid"+tableid.slice(5));
    // calling updateTable function
    updateTable(tableid.slice(5));


};


//menu item on table updation
const updateMenuItemOnTable =(t_id, name, price)=>{

    // console.log(t_id + name + price);
    let itemExists =false;

    //check if menu-item already exists
    for( let i=0; i< tables[t_id-1].itemList.length; i++){
        if (tables[t_id-1].itemList[i].name ==name){
            itemExists=true;
        }
    }
    // console.log("MenuItem");
    //we have to increase count if item is already present
    if(itemExists){
        for (let i=0; i<tables[t_id-1].itemList.length; i++){
            if(tables[t_id-1].itemList[i].name==name){
                tables[t_id-1].itemList[i].count++;
                break;
            }
        }
    }//else enter item in itemList array in table
    else{
        let itemObject ={
            name: name,
            price: price,
            count: 1,
        }
        tables[t_id-1].itemList.push(itemObject);
        // console.log(itemObject);
        // console.log("tble item"+itemList);
        // console.log("this is item "+ itemList[0]);
    }
};


//update the total amount and total number of items on each table
const updateTable =(t_id) =>{

    let itemAmount = 0;
    let itemCount =0;

    //using itemList array, get the total amount and count of item from the array
    for (let i=0; i<tables[t_id-1].itemList.length; i++){

        itemAmount+=(tables[t_id-1].itemList[i].price*tables[t_id-1].itemList[i].count)

        itemCount += (tables[t_id-1].itemList[i].count);
        
    }

    // for(let i=0; i<tables.length;i++){
    //     document.getElementById(`
    //     priceT${i+1}`).textContent =`Rs. ${itemAmount}`;
    //     document.getElementById(`TotalItems${i+1}`).textContent = `Total Items: ${itemCount}`;
    // }

    // let T = document.getElementById(`
    // priceT${i+1}`);
    // let am = document.getElementById(`TotalForTable${i+1}`);

    //error

    let totalPrice = document.querySelector(`#priceT${t_id}`);
    
    let totaltblItems = document.querySelector(`#TotalItems${t_id}`);

    // let ptags= document.getElementById(`pTag${i+1}`)
    totalPrice.innerHTML = `Rs. ${itemAmount} |`;
    totaltblItems.innerHTML = `Total Items: ${itemCount}`;

    console.log(totalPrice);
    console.log(totaltblItems);



    console.log("Print if table updates")
    console.log("UT" +itemCount);
    console.log("UT"+ itemAmount);
    console.log("updateTable");


    // document.getElementById(`
    //     priceT${t_id}`).innerHTML =`Rs. ${itemAmount}`;

    // document.getElementById(`TotalItems${t_id}`).innerHTML = `Total Items: ${itemCount}`;

};













//Popup /Modal
//get modal element
var modal = document.getElementById('BillingPop');

//get close button
var closeBtn = document.getElementById('closeBtn');


//function to open modal
function openBill(){
    modal.style.display='block';
    //call
    let updtID= e.target.id;
    updateBill(updtID.slice(5));
}

//function to close modal
function closeBill(){
    modal.style.display='none';
}

//function to close modal if outside click
const clickOutside=(e)=>{
    if(e.target== modal){
        modal.style.display='none';
    }
}

//Listen for close click
closeBtn.addEventListener('click',closeBill);
//Listen for outside click
window.addEventListener('click', clickOutside);










// // this function is used to update the bill
// const updateBill =(_id) => {
//     // accessing table element and adding innerHTML
//     document.getElementById('popTable').innerHTML=
//     ` 
//         <tr >
//             <th>S No.</th>
//             <th>Item</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Delete</th>
//         </tr>
//     `
//     let mycount=0;//it will handle serial number
//     for(let i=0;i<tables[_id-1].itemList.length;i++){
    
//         if(tables[_id-1].itemList[i].count!=0){
//             document.getElementById('popTable').innerHTML+=
//             `
//             <tr>
//                 <td> ${++mycount} </td>
//                 <td>${tables[_id-1].itemList[i].name}</td>
//                 <td>${tables[_id-1].itemList[i].cost} Rs.</td>
//                 <td><input type='number' min='1' max='5' value = '${tables[_id-1].itemList[i].count}' onchange='updateValue(${_id},${i},this)' ></td>
//                 <td>
//                     <button class="cutTable" onclick="deleteItem(${_id},${i})" > 
//                         <i class="fa fa-trash-o"></i>
//                     </button>
//                 </td>
//             </tr>
//             `
//         }
        
//     }
//     let total =0;//handle total amount of that table
//     for(let i=0;i<tables[_id-1].itemList.length;i++){
//         total += (tables[_id-1].itemList[i].count * tables[_id-1].itemList[i].cost);
//     }
//     document.getElementById('displaytotal').innerHTML = total;
//     // calling update table after update bill
//     updateTable(_id);
// }

// // this function is used to generate bill
// const generateBill = (e) => {
//     // getting total amount 
//     const toatlVal = e.target.parentNode.querySelector('#displaytotal').innerText

//     // asking for feedback
//     let feedback = alert(  
//     `
//     Your total cost is ${toatlVal} Rs.
//     `
//     );

//     // setting the itemList of that table with free array
//     tables[_id-1].itemList=[];
//     document.getElementById(`table${_id}amount`).innerHTML=`Rs. 0 | `;
//     document.getElementById(`table${_id}items`).innerHTML=`items: 0`;
//     // calling updateBill function
//     updateBill(_id);
// }


// // this will call when we update number of items using input type number
// const updateValue = (_id,index,event) => {    
//     tables[_id-1].itemList[index].count = parseInt(event.value);
//     updateBill(_id);
// }

// // used when we have to delete that item
// const deleteItem = (_id,index ) => {
//     tables[_id-1].itemList[index] = {
//         name : "",
//         cost : 0,
//         count : 0,
//     };
//     updateBill(_id);
// }



// // function generateBill(){
// //     alert("Your Total Bill is: ");
// // }

// // const billBtn = document.getElementById('Bill-Btn');
// // billBtn.addEventListener('click', generateBill);





