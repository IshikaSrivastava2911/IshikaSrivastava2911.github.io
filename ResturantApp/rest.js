//table array to store table objects
const tables=[
    {t_id:1, amount: 0.00, itemList:{}, itemCount:0},
    {t_id:2, amount: 0.00, itemList:{}, itemCount:0},
    {t_id:3, amount: 0.00, itemList:{}, itemCount:0},
    {t_id:4, amount: 0.00, itemList:{}, itemCount:0},
    {t_id:5, amount: 0.00, itemList:{}, itemCount:0},
];


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
        eachTableNumber.addEventListener('click',(event)=>{
            openBill(event);
        })



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

        tblTotalItem.innerHTML = `Total Items: ${tables[i].itemCount}`;

        pt.appendChild(priceItem);
        pt.appendChild(tblTotalItem);

        eachTableNumber.appendChild(pt);

        document.getElementById('table-list').appendChild(eachTableNumber);
    }
};


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


    let tableid = e.target.id;
   
    
    // calling funtion to update the items on the table
    addMenuItemOnTable(tableid.slice(5),menus[item_id-1].menu_item,menus[item_id-1].price)

    updateTableUI(tableid.slice(5));
    
};


//menu item on table updation
const addMenuItemOnTable =(t_id, name, price)=>{
    let itemExists =false;
    //check if menu-item already exists
    if (`${name}` in tables[t_id-1].itemList){
        itemExists=true;
    }
    //we have to increase count if item is already present
    if(itemExists){
        tables[t_id-1].itemList[`${name}`].count +=1;

    }//else enter item in itemList array in table
    else{
        let itemObject ={
            "name": name,
            "price": price,
            "count": 1,
        };
    
        tables[t_id-1].itemList[`${name}`]=itemObject;
        console.log(tables[t_id-1].itemList);
    }
    //update the total count and total amount
    tables[t_id-1].itemCount +=1;
    tables[t_id-1].amount += price;

    console.log(tables[t_id-1].itemCount); 
    console.log(tables[t_id-1].amount);

    
};

const updateTableUI = (t_id)=>{
    //Updating the price on the UI
    let totalPrice = document.querySelector(`#priceT${t_id}`);
    
    let totaltblItems = document.querySelector(`#TotalItems${t_id}`);

    // let ptags= document.getElementById(`pTag${i+1}`)
    totalPrice.innerHTML = `Rs. ${tables[t_id-1].amount} |`;
    totaltblItems.innerHTML = `Total Items: ${tables[t_id-1].itemCount}`;
}








//Popup /Modal
//get modal element
var modal = document.getElementById('BillingPop');

//get close button
var closeBtn = document.getElementById('closeBtn');


//function to open modal
const openBill=(e)=>{
    modal.style.display='block';
    //call
    let updtID= e.target.id;
    // console.log(updtID);
    popupBill(updtID.slice(5));
    updatePopTotalAmt(updtID.slice(5));
}

//function to close modal
const closeBill=(e)=>{
    // console.log("close");
    modal.style.display='none';
    let updtID= e.target.id;
    // deletePopTab(updtID);
}

//function to close modal if outside click
const clickOutside=(e)=>{
    // console.log("closeout");
    if(e.target== modal){
        modal.style.display='none';
    }
    let updtID= e.target.id;
    console.log(updtID);
    // deletePopTab(updtID);
}

//Listen for close click
closeBtn.addEventListener('click',(event)=>{closeBill(event)});
//Listen for outside click
window.addEventListener('click', (event)=>{clickOutside(event)});





// // this function is used to update the bill
const popupBill =(t_id) => {
    // console.log("bill printing");
    const tableNameonHeader = document.getElementById('tableHeaderName');
    tableNameonHeader.innerText = `| Table-${t_id}`;

    let itemNum=1;
    const keys = Object.keys(tables[t_id-1].itemList);
    // console.log("Keys: "+keys);
    const tableHeader = document.getElementById('popTable');
    tableHeader.innerHTML = `
                    <tr >
                            <th>S No.</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                    </tr>
    `;

    
    for(let i=0;i<keys.length;i++){

        let countPop =tables[t_id-1].itemList[keys[i]].count;
        let namePop =tables[t_id-1].itemList[keys[i]].name;
        let pricePop = tables[t_id-1].itemList[keys[i]].price;

        
        // console.log("counting: "+ countPop)
    
        if(countPop!=0){
            const tr1 = document.createElement('tr');
            tr1.id=`row-${itemNum}`;
            
            const td1 = document.createElement('td');
            td1.innerHTML = `${itemNum++}`;
            tr1.appendChild(td1);

            const td2 = document.createElement('td');
            td2.innerHTML = `${namePop}`;
            tr1.appendChild(td2);

            const td3 = document.createElement('td');
            td3.innerHTML=`${pricePop}`;
            tr1.appendChild(td3);

            const td4 = document.createElement('td');   //table description         
            const ipt = document.createElement('input');
            ipt.setAttribute("data-item",namePop);
            ipt.setAttribute("type","number");
            ipt.setAttribute("min",1);
            ipt.setAttribute("max",6);
            // ipt.min=1;
            // ipt.max=6;
            ipt.setAttribute("id","popup-item-change");
            // console.log(t_id);
            //  console.log(namePop);

            ipt.addEventListener('change', (event)=>{
                change(event,t_id,namePop);
            });
            td4.appendChild(ipt);
            tr1.appendChild(td4); //appended in table row

            const td5 = document.createElement('td');
            td5.innerHTML=`<button class="btn" id="btn"><i class="fa fa-trash"></i></button>`;
            tr1.appendChild(td5);

            document.getElementById('popTable').appendChild(tr1);

            const firstchild = td5.parentNode.firstChild.innerHTML;
            console.log("first:"+ firstchild);

            let tBillPrice = document.querySelector(`#priceT${t_id}`).innerHTML; 

            document.getElementById('grandTotal').innerHTML= `Total Bill: ${tBillPrice}`;

            document.getElementById("btn").addEventListener('click',(event)=>{
                itemRemove(event,t_id,`row-${firstchild}`, namePop);
            })
        
            // <td><button class="itemRemove" onclick="itemRemove(${t_id},${i})">&times;</button></td>
        }
        
    }

    // itemAddedinTable(t_id);
    const billBtn = document.getElementById('Bill-btn');
        billBtn.addEventListener('click', (event)=>{
            generateBill(event,t_id);
        });

    
}

const updatePopTotalAmt=(t_id)=>{
    let tBillPrice = document.querySelector(`#priceT${t_id}`).innerHTML; 

    document.getElementById('grandTotal').innerHTML= `Total Bill: ${tBillPrice}`;
}


const change=(e,t_id,namePop)=>{
//actual amount count
// 2
// itemList={
//     "french fries": { "name":"fench fries", "count": 2, "price": 254}
// }
// table[t_id-1].itemList[namePop].count

    const inputValue = parseInt(e.target.value);
    const itemPrice = tables[t_id-1].itemList[namePop].price;
    const newtotalAmount = inputValue*itemPrice;
    // console.log(newtotalAmount);
    // console.log("Price: "+itemPrice);
    const initialCount = tables[t_id-1].itemList[namePop].count;

    //removing previous value
    tables[t_id-1].itemCount -= initialCount;
    tables[t_id-1].amount -= initialCount*itemPrice;

    // setting current value
    tables[t_id-1].itemList[namePop].count = inputValue;
    tables[t_id-1].itemCount += inputValue;
    tables[t_id-1].amount += inputValue*itemPrice;

    console.log(tables[t_id-1].itemCount);
    console.log(tables[t_id-1].amount);

    //update UI
    // updateTableUI(t_id);
    let totalPrice = document.querySelector(`#priceT${t_id}`);
    
    let totaltblItems = document.querySelector(`#TotalItems${t_id}`);

    totalPrice.innerHTML = `Rs. ${tables[t_id-1].amount} |`;
    totaltblItems.innerHTML = `Total Items: ${tables[t_id-1].itemCount}`;
    
    
    updatePopTotalAmt(t_id);

    
}

const itemRemove = (e,t_id,r_id,menuItem) => {
     
    console.log(r_id);
    tables[t_id-1].amount -=tables[t_id-1].itemList[menuItem].price*tables[t_id-1].itemList[menuItem].count;
    tables[t_id-1].itemCount -=tables[t_id-1].itemList[menuItem].count;
    
    //after removing the price and amount from total, remove the item from that table's object
    tables[t_id-1].itemList[menuItem].name="";
    tables[t_id-1].itemList[menuItem].count=0;
    tables[t_id-1].itemList[menuItem].price=0;
    // tables[t_id-1].itemList[menuItem].remove();
    delete tables[t_id-1].itemList[menuItem];
    // console.log("menu: "+ tables[t_id-1].itemList[menuItem] )

    // const table = document.getElementById('popTable');
    //empty the row UI
    const row= document.getElementById(r_id);
    row.innerHTML = "";

    // //here if I call popupBill then new bill should displayes?
    popupBill(t_id);
    
    //to update the Table UI
    let totalPrice = document.querySelector(`#priceT${t_id}`);
    
    let totaltblItems = document.querySelector(`#TotalItems${t_id}`);

    totalPrice.innerHTML = `Rs. ${tables[t_id-1].amount} |`;
    totaltblItems.innerHTML = `Total Items: ${tables[t_id-1].itemCount}`;

    // popupBill(t_id);
    updateTableUI(t_id);
    updatePopTotalAmt(t_id);
            
}



// const deletePopTab =(t_id)=>{
    
//     const popUpTableRow = document.getElementById(`row${t_id}`);
//     popUpTableRow.remove();

//     // popupBill(t_id);

// }




const generateBill=(e, t_id)=>{
    const grndtotal= document.getElementById('grandTotal').innerHTML;
    alert("Your Total Bill is: "+ grndtotal);

    
}





