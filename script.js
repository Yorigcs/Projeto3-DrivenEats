let dish_name  = '', drink_name  = '', dessert_name = '';
let dish_price = 0.0, drink_price  = 0.0, dessert_price  = 0.0;
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

        //console.log(dish_name,dish_price);

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

        //console.log(drink_name,drink_price);
    }

    if (menu === 'desserts') {

        if(IsMultSelected >= 1) {
            for(let j = 0; j < ItemsNumb;j++) {
                parentDOM.getElementsByClassName("inner-content")[j].classList.remove("selected_item");
            }
            parentDOM.getElementsByClassName("inner-content")[i].classList.add("selected_item");
        }

        dessert_name = parentDOM.getElementsByClassName(menu + "_name")[i].innerHTML;

        dessert_price = parseFloat(parentDOM.getElementsByClassName(menu + "_price")[i]
        .innerHTML.replace(",",".").replace("R$"," ")) ;

        //console.log(dessert_name,dessert_price);
    }

    total_price = dish_price + drink_price +dessert_price;
    //console.log(total_price);
    
    const button = document.querySelector('.button-order');
    
    if( dish_price !== 0 && drink_price !==0 && dessert_price !== 0) {
        button.removeAttribute("disabled");
        button.innerHTML = 'Fechar Pedido';
        button.style.backgroundColor = "#32B72F";
        
    }

    

    document.getElementById('send-order').onclick = function() {

        let ConfirmBox = document.querySelectorAll('.confirm_order span p');
        ConfirmBox[0].innerHTML = dish_name;
        ConfirmBox[1].innerHTML = dish_price;
        ConfirmBox[2].innerHTML = drink_name;
        ConfirmBox[3].innerHTML = drink_price;
        ConfirmBox[4].innerHTML = dessert_name;
        ConfirmBox[5].innerHTML = dessert_price
        ConfirmBox[7].innerHTML = 'R$ ' + total_price;
        document.getElementById('box-order').style.display  = "block";  

        document.getElementById('confirm-order').onclick = function() {

            let name = prompt("Digite seu nome:","Fulano");
            let adress = prompt("Digite seu endereço","Rua...");

            let txt = 'Olá, gostária de fazer o pedido:\n- Prato: ' + dish_name + 
            '\n- Bebida: ' + drink_name + '\n- Sobremesa: ' + dessert_name +
            '\nTotal: R$ ' + total_price.toFixed(2) + '\n\nNome: ' + name +
            '\nEndereço: ' + adress;

            let enconded = encodeURIComponent(txt);
            const linkwhats = document.querySelector('.link');
            linkwhats.setAttribute('href','https://wa.me/?text=' + enconded)
        }

        document.getElementById('cancel-order').onclick = function() {
            document.getElementById('box-order').style.display  = "none";

           
        }
    }

}

