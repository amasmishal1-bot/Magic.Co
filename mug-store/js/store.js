let cart=[];

function addToCart(name,price){
cart.push({name:name,price:price});
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added to cart");
}

function displayCart(){
let items=JSON.parse(localStorage.getItem("cart"))||[];
let html="";
items.forEach(i=>{
html+=i.name+" - ₹"+i.price+"<br>";
});
document.getElementById("cartItems").innerHTML=html;
}
