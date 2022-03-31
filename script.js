let dish_name  = '', drink_name  = '', desert_name = '';
let dish_price = 0.0, drink_price  = 0.0, desert_price  = 0.0;
let total_price = 0.0;

function select_items(i, menu) {
    const parentDOM = document.getElementById(menu);

   

    let IsMultSelected = (document.querySelectorAll('.' + menu +' .row-content .inner-content.selected_item ')).length;
    let ItemsNumb = (document.querySelectorAll('.' + menu +' .row-content .inner-content')).length;

    

    parentDOM.getElementsByClassName("inner-content")[i].classList.add("selected_item");
    if (menu === 'dishes') {

        if(IsMultSelected >= 1) {
            for(let j = 0; j < ItemsNumb;j++) {
                parentDOM.getElementsByClassName("inner-content")[j].classList.remove("selected_item");
            }
            parentDOM.getElementsByClassName("inner-content")[i].classList.add("selected_item");
        }
        dish_name = parentDOM.getElementsByClassName(menu + "_name")[i].innerHTML;

        dish_price = parseFloat(parentDOM.getElementsByClassName(menu + "_price")[i]
        .innerHTML.replace(",",".").replace("R$"," ")) ;

        console.log(dish_name,dish_price);

    }

    if (menu === 'drinks') {

        if(IsMultSelected >= 1) {
            for(let j = 0; j < ItemsNumb;j++) {
                parentDOM.getElementsByClassName("inner-content")[j].classList.remove("selected_item");
            }
            parentDOM.getElementsByClassName("inner-content")[i].classList.add("selected_item");
        }
        drink_name = parentDOM.getElementsByClassName(menu + "_name")[i].innerHTML;

        drink_price = parseFloat(parentDOM.getElementsByClassName(menu + "_price")[i]
        .innerHTML.replace(",",".").replace("R$"," ")) ;

        console.log(drink_name,drink_price);
    }

    if (menu === 'deserts') {

        if(IsMultSelected >= 1) {
            for(let j = 0; j < ItemsNumb;j++) {
                parentDOM.getElementsByClassName("inner-content")[j].classList.remove("selected_item");
            }
            parentDOM.getElementsByClassName("inner-content")[i].classList.add("selected_item");
        }

        desert_name = parentDOM.getElementsByClassName(menu + "_name")[i].innerHTML;

        desert_price = parseFloat(parentDOM.getElementsByClassName(menu + "_price")[i]
        .innerHTML.replace(",",".").replace("R$"," ")) ;

        console.log(desert_name,desert_price);
    }

    total_price = dish_price + drink_price +desert_price;
    console.log(total_price);
    
    const button = document.querySelector('.button-order');
    
    if( dish_price != 0 && drink_price !=0 && desert_price != 0) {
        button.removeAttribute("disabled");
        button.innerHTML = 'Fechar Pedido';
        button.style.backgroundColor = "#32B72F";
        
    }
}