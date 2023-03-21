// Cart 

let cartIcons = document.querySelector('#cart-icons');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// Open Click
cartIcons.onclick = () =>{

    cart.classList.add("active");
};


// Close Click
closeCart.onclick = () =>{

    cart.classList.remove("active");
};


//Cart Working JS  

if (document.readyState == 'loading'){

    document.addEventListener('DOMContentLoaded',ready);
}else{

    ready();

};


function ready(){

    var removecartbutton= document.getElementsByClassName('remove-cart')

    console.log(removecartbutton)

    for(var i =0 ;i < removecartbutton.length; i++){

        var button = removecartbutton[i]
        button.addEventListener('click', removeCartItem)
    }
    // =================
    var quntityInput = document.getElementsByClassName('cart-quntity')

    for(var i =0 ;i < quntityInput.length; i++){

        var input = quntityInput[i]
        input.addEventListener('change',quntitychanged)
    }
    
    // Add TO Cart 

    var addCart = document.getElementsByClassName('add-cart')

    for(var i =0 ;i < addCart.length; i++){

        var button =  addCart[i]

        button.addEventListener('click',addCartClicked)

    }

    // buy button    

    document.getElementsByClassName('btn-buy')[0].addEventListener('click',buyButtonClicked)

}


function buyButtonClicked(){

    alert('Youre Order Is Placed')
    var cartcontent = document.getElementsByClassName("cart-content")[0]

    while (cartcontent.hasChildNodes()){

        cartcontent.removeChild(cartcontent.firstChild)
        
    }


}






function removeCartItem(event){


    var buttonClicked = event.target 

    buttonClicked.parentElement.remove()
    updateTotal()
}

function quntitychanged(event){

    var input = event.target;

    if (isNaN(input.value) || input.value <= 0){

        input.value = 1;

    };

    updateTotal();
};

function addCartClicked(event){

    var button = event.target;

    var shopPrudoct = button.parentElement

    var title = shopPrudoct.getElementsByClassName('product-title')[0].innerText;

    var price = shopPrudoct.getElementsByClassName('price')[0].innerText;

    var prudoctImg = shopPrudoct.getElementsByClassName('product-img')[0].src;

    addPrudoctToCart(title,price,prudoctImg)
    updateTotal()
}


function addPrudoctToCart(title,price,prudoctImg){

    var cartshopbox = document.createElement("div")

    cartshopbox.classList.add('cart-box')

    var cartItems = document.getElementsByClassName('cart-content')[0]

    var createitemName = cartItems.getElementsByClassName('cart-product-title')

    for(var i =0 ;i < createitemName.length; i++){
        if(createitemName[i].innerText == title){

            alert('You Have elredy Add This Item')


            return;
        }  

    }
    var cartboxcontent = `
        <img src="${prudoctImg}" alt="" class="cart-img">
    <div class="detal-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quntity">
    </div>
    <!--Remov Cart-->
    <i class='bx bxs-trash  remove-cart'></i>
    <!--End Remov Cart-->
    
    `
    
    cartshopbox.innerHTML = cartboxcontent;
    
    cartItems.append(cartshopbox)
    
    cartshopbox.getElementsByClassName('remove-cart')[0].addEventListener('click',removeCartItem)
    cartshopbox.getElementsByClassName('cart-quntity')[0].addEventListener('change',quntitychanged)



}







function updateTotal(){

    var cartcontent = document.getElementsByClassName('cart-content')[0];

    var cartboxs = cartcontent.getElementsByClassName('cart-box');
    var total = 0;
    for(var i =0 ;i < cartboxs.length; i++){

        var cartbox = cartboxs[i];
        var pricrElement = cartbox.getElementsByClassName('cart-price')[0];

        var quntityElemante = cartbox.getElementsByClassName('cart-quntity')[0];
        var price = parseFloat(pricrElement.innerText.replace("DA",""))
        var quantity = quntityElemante.value;

        total = total + (price * quantity);

        total = Math.round(total * 100) / 100 ;

        document.getElementsByClassName('totile-price')[0].innerText = "DA" + total;
    };


};

