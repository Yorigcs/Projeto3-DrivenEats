const names = [];
const prices = [];

function select_dishes(element) {
    const border = document.querySelector('.dishes .selected_item')
    const check = document.querySelector('.dishes .selected_item ion-icon')
    if(border !== null) {
        border.classList.remove('selected_item');
        check.classList.remove('check');
    }

    element.classList.add('selected_item');
    element.querySelector('ion-icon').classList.add('check');

    names[0] = element.querySelector('.name').innerHTML;
    prices[0] = element.querySelector('.price').innerHTML;
    
    
}


function select_drinks(element) {
    const border = document.querySelector('.drinks .selected_item')
    const check = document.querySelector('.drinks .selected_item ion-icon')
    if(border !== null) {
        border.classList.remove('selected_item');
        check.classList.remove('check');
    }

    element.classList.add('selected_item');
    element.querySelector('ion-icon').classList.add('check');
    names[1] = element.querySelector('.name').innerHTML;
    prices[1] = element.querySelector('.price').innerHTML;

}

function select_desserts(element) {
    const border = document.querySelector('.desserts .selected_item')
    const check = document.querySelector('.desserts .selected_item ion-icon')
    if(border !== null) {
        border.classList.remove('selected_item');
        check.classList.remove('check');
    }

    element.classList.add('selected_item');
    element.querySelector('ion-icon').classList.add('check');
    names[2] = element.querySelector('.name').innerHTML;
    prices[2] = element.querySelector('.price').innerHTML;
    
}

function isAllowButton() {  
    
    if( prices[0] && prices[1] && prices[2]) {
        const button = document.querySelector('.button-order');
        button.removeAttribute("disabled");
        button.innerHTML = 'Fechar Pedido';
        button.style.backgroundColor = "#32B72F";

    
        prices[3] = parseFloat(prices[0].replace(",",".").replace("R$"," "))
        prices[4] = parseFloat(prices[1].replace(",",".").replace("R$"," "))
        prices[5] = parseFloat(prices[2].replace(",",".").replace("R$"," "))
        prices[6] = (prices[3].toFixed(2)).replace(".",",");
        prices[7] = (prices[4].toFixed(2)).replace(".",",");
        prices[8] = (prices[5].toFixed(2)).replace(".",",");
        prices[9] = prices[3] + prices[4] + prices[5];
        prices[10] =  (prices[9].toFixed(2)).replace(".",",");

    }
}

function callConfirmBox() {
    let ConfirmBox = document.querySelectorAll('.confirm_order_box span p');
    ConfirmBox[0].innerHTML = names[0];
    ConfirmBox[1].innerHTML = prices[6];
    ConfirmBox[2].innerHTML = names[1];
    ConfirmBox[3].innerHTML = prices[7];
    ConfirmBox[4].innerHTML = names[2];
    ConfirmBox[5].innerHTML = prices[8]
    ConfirmBox[7].innerHTML = `R$ ${prices[10]}`

    let enableConfirmBox = document.querySelector('.confirm_order_box');
    enableConfirmBox.classList.add('enableBox')

    document.querySelector('header').classList.add('blurifBoxOpen')
    document.querySelector('main').classList.add('blurifBoxOpen')
    document.querySelector('footer').classList.add('blurifBoxOpen')
}

function RemoveConfirmBox() {
    let enableConfirmBox = document.querySelector('.confirm_order_box');
    enableConfirmBox.classList.remove('enableBox')

    document.querySelector('header').classList.remove('blurifBoxOpen')
    document.querySelector('main').classList.remove('blurifBoxOpen')
    document.querySelector('footer').classList.remove('blurifBoxOpen')
}

function sendOrder() {
    let name = prompt("Digite seu nome:","Fulano");
    let adress = prompt("Digite seu endereço","Rua...");

    let txt = `Olá, gostária de fazer o pedido:
    - Prato: ${names[0]} 
    - Bebida: ${names[1]}
    - Sobremesa: ${names[2]}
    Total: R$ ${prices[10]}\n
    Nome: ${name}
    Endereço: ${adress}`;

    let enconded = encodeURIComponent(txt);
    const linkwhats = document.querySelector('.link');
    linkwhats.setAttribute('href','https://wa.me/?text=' + enconded)

}
