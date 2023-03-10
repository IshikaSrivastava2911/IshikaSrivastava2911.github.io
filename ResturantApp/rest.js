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
window.onload =()=>{
    tableDisplay();
    menuDisplay();
}

//function to display tables
const tableDisplay=()=>{
    for( let i=0; i<tables.length; i++){
        //create div
        let eachTableNumber = document.createElement('div');
        //class
        eachTableNumber.className = "eachtable";
        //id
        eachTableNumber.id=`table${i+1}`;

        //for drop
        eachTableNumber.addEventListener('dragover', (event)=>{
            event.preventDefault();
        })

        eachTableNumber.addEventListener('drop', (event)=>{
            drop(event);
        })

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
        //span tag for price
        let price = document.createElement('span');

        price.className = "price";
        price.id=`priceT${i+1}`;

        price.innerHTML = `Rs. ${tables[i].amount} |`;

        

        //span for total number of items
        let tblTotalItem= document.createElement('span');

        tblTotalItem.className ="total";
        tblTotalItem.id=`TotalForTable${i+1}`;

        tblTotalItem.innerHTML = `Total Items: ${tables[i].itemList.length}`;

        pt.appendChild(price);
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
            DragEvent(event)
        })

        eachMenuItem.draggable="true";

        //dish name
        let dish= document.createElement('h4');

        dish.className="item-name"

        dish.innerHTML = menus[i].menu_item;

        eachMenuItem.appendChild(dish);

        //price of dish
        let item_price = document.createElement('h4');

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
    const menuName = menuItem.getElementsByTagName("h4");

    for(var i=0; i<menuName.length;i++){
        let matched= eachMenuItem[i].getElementsByTagName('h4')[0];
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



// //drag function
// const drag =(e)=>{
//     e.dataTransfer.setData("text", e.target.id);
// }

// //drop function
// const drop













//Popup /Modal
//get modal element
var modal = document.getElementById('BillingPop');

//get close button
var closeBtn = document.getElementById('closeBtn');


//function to open modal
function openBill(){
    modal.style.display='block';
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










