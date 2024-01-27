var set=document.getElementById('#shows')
var sett=document.getElementById('#cart-close')
var carts=document.querySelector('.cart-active')
function shows(){
    carts.style.display="block" 

}
function closed(){
    carts.style.display="none"
}
var sets=document.getElementById('#stay')
var set=document.querySelector('.cart-count')
function shew(){
    set.style.display="block"
    set.style.color= "black"
}



document.addEventListener('DOMContentLoaded',loadfood);
function loadfood(){
    loadcontent();
}
function loadcontent(){
    
    let btnremove=document.querySelectorAll('#cart-remove');
    
    btnremove.forEach((btn)=>{
        btn.addEventListener('click',removeitem);


    });
    function removeitem(){
        this.parentElement.remove()
    }
}
var sidenav=document.querySelector(".side-navbar")
 
function showsnavbar(){
    sidenav.style.left="0" 

}
function closenavbar(){
    sidenav.style.left="-60%"
}
        

function placeOrder() {
    // You can add logic here to handle the order placement
    alert("Order placed successfully!");
}
function changeColor() {
    const container = document.querySelector('container');
    const randomColor = getRandomColor();
    container.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}