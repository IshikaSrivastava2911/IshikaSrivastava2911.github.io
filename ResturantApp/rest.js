const tableSearch =() => {
    //input item
    let search= document.getElementById('table-search')
    search = search.value.toLowerCase();
    // let ul = document.getElementsByClass('table-list');
    //getting table details
    let tableItem = document.getElementById('table-list');
    let eachItem = document.querySelectorAll(".eachtable");
    const itemName = tableItem.getElementsByTagName("p");

    for(var i=0; i<itemName.length;i++){
        let match= eachItem[i].getElementsByTagName('p')[0];

        if(match){
            let textVal= match.textContent || match.innerHTML;

            if(textVal.toLowerCase().indexOf(search) > -1){
                eachItem[i].style.display="block";
                
            }else{
                eachItem[i].style.display="none";
            }
        }
    }

    // //if search box is not empty
    // if(search){

    //     let tableFound= false;

    //     for( var i =0; i<tableItem.length; i++){
    //         const tableID = tableItem[i].id;

    //         if (tableID == search) {
    //             tableItem[i].style.display = "block";
    //             tableFound = true;
    //         } else {
    //             tableItem[i].style.display = "none";
    //         }
    //     }
    //     if(!tableFound){
    //         document.querySelector(".not-found-table").style.display="block";
    //     }
    //     else{
    //         document.querySelector(".not-found-table").style.display="none";
    //     }
    // }
    // else{
    //     document.querySelector(".not-found-table").style.display="none";
    //     for (var i=0; i<tableItem.length; i++){
    //         tableItem[i].style.display="block";
    //     }
    // }

}

const menuSearch=()=>{
    //input item
    let searchMenu= document.getElementById('menu-search')
    searchMenu = searchMenu.value.toLowerCase();
    
    //getting table details
    let menuItem = document.getElementById('menu-list');
    let eachMenuItem = document.querySelectorAll(".item");
    const menuName = menuItem.getElementsByTagName("p");

    for(var i=0; i<menuName.length;i++){
        let matched= eachMenuItem[i].getElementsByTagName('p')[0];
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




//Popup /Modal
//get modal element
var modal = document.getElementById('BillingPop');

//get open model element
var modalBtn1 = document.getElementById('table-1');
var modalBtn2 = document.getElementById('table-2');
var modalBtn3 = document.getElementById('table-3');
var modalBtn4 = document.getElementById('table-4');
var modalBtn5 = document.getElementById('table-5');

//get close button
var closeBtn = document.getElementById('closeBtn');

//listen for the click
modalBtn1.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal);  
modalBtn3.addEventListener('click', openModal);
modalBtn4.addEventListener('click', openModal);
modalBtn5.addEventListener('click', openModal);

//Listen for close click
closeBtn.addEventListener('click',closeModal);
//Listen for outside click
window.addEventListener('click', clickOutside);

//function to open modal
function openModal(){
    modal.style.display='block';
}

//function to close modal
function closeModal(){
    modal.style.display='none';
}

//function to close modal if outside click
function clickOutside(e){
    if(e.target== modal){
        modal.style.display='none';
    }
}










