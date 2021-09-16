/*recuperation de l'email d'inscription*/
var affichemail=document.querySelector('.affichemail')

window.onstorage=event=>{
console.log(event)
}

var email=localStorage.getItem('Email')

affichemail.innerHTML=email