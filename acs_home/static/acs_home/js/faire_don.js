
var choixbtn=document.querySelectorAll('.choixbtn')
var containercase=document.querySelector('.containercase')
var saisirsomme=document.querySelector('.saisirsomme')
var number=document.querySelector('.number')


/**choix */
for(var i=0;i<choixbtn.length;i++){

    choixbtn[i].addEventListener('click',function(){

        var parent=this.parentNode
        parent.querySelector('.choixbtn.active').classList.remove('active')
        this.classList.add('active')
    
         /*console.log(this)*/

         if(choixbtn[0].classList.contains('active')){
          saisirsomme.style.display="flex"
            containercase.innerHTML=`
            <label for="prix" class="somme active1">
            50€

            <input type="radio" name="on"  id="prix" class="prix" value="50">
         </label>

       <label for="prix2" class="somme">

            100€

        <input  type="radio" name="on"  id="prix2" class="prix" value="100">
      </label>

    <label for="prix3" class="somme">

          150€
      <input type="radio" name="on"  id="prix3" class="prix" value="150">
    </label>

    <label for="prix4" class="somme">
        

         200€
     <input type="radio" name="on" id="prix4" class="prix" value="200">
    </label>

          `

var number=document.querySelector('.number')
          number.value="50"


          var somme=document.querySelectorAll('.somme')
for(var i=0;i<somme.length;i++){
  var number=document.querySelector('.number')

 somme[i].addEventListener('click',function(){

 var parent=this.parentNode
 var prix=this.querySelector('.prix').value
 number.value=prix
 parent.querySelector('.somme.active1').classList.remove('active1')
this.classList.add('active1')

    })
  }




    /* traitement de formulaire pour les paiements */
    var parentAPI=document.querySelector('.parentAPI')

    var form=document.querySelector('.centre')
    form.addEventListener('submit',function(e){

    
       /*blocage des inputs*/
        var ipts=document.querySelector('.ipt')
        var erreur=document.querySelector('.error')

        if(ipts.value==="" || ipts.value<50){
          e.preventDefault()
          ipts.style.border="2px solid red"
          erreur.style.display="flex"
         }else{
          e.preventDefault()
          ipts.style.border="1px solid #b9b9b9ee"
          parentAPI.style.display="flex";
          erreur.style.display="none"
        }
    
    
    })


        }

        if(choixbtn[1].classList.contains('active')){
          containercase.innerHTML=`
             <h2 style="color:red">instruction</h2>

             <ul>
                <li>pour faire un don tout les mois vous devez vous s'incrit</li>
             </ul>

          `

          saisirsomme.style.display="none"
            
         
        }


                  
    })

}




/**essai */
var centre=document.querySelector('.centre')
var cas2=document.querySelector('.cas2')

/*choix pour don*/
var cas3=document.querySelector('.cas3')



 /**formulaire */

 var forminscription=document.querySelector('.forminscription')

 forminscription.addEventListener('submit',function(e){
var iptinscrits=document.querySelectorAll('.iptinscrit')

iptinscrits.forEach(iptinscrit=>{
  if(iptinscrit.value===""){
    e.preventDefault()
    iptinscrit.style.border="2px solid red"
}else{
    iptinscrit.style.border="1px solid #b9b9b9ee"

}
})

var email=document.querySelector('.email')
var emailValue=email.value
localStorage.setItem('Email',emailValue)
})




var donAnnuel=document.querySelector('.donAnnuel').addEventListener('click',function(){
  cas3.style.display="flex"
  cas2.style.display="none"
  containercase.style.flexDirection="unset"
  cas2.innerHTML=``


  
    /*redirection du formulaire*/         
    centre.action="#"  
    
  /*ajouter la class de l'input montant de don*/
  centre.querySelector(".number").classList.add("ipt")  


})



var somme=document.querySelectorAll('.somme')
for(var i=0;i<somme.length;i++){
  var number=document.querySelector('.number')

 somme[i].addEventListener('click',function(){

 var parent=this.parentNode
 var prix=this.querySelector('.prix').value
 number.value=prix
 parent.querySelector('.somme.active1').classList.remove('active1')
this.classList.add('active1')

    })
  }




    /* traitement de formulaire pour les paiements */
    var parentAPI=document.querySelector('.parentAPI')

    var form=document.querySelector('.centre')
    form.addEventListener('submit',function(e){

    
       /*blocage des inputs*/
        var ipts=document.querySelector('.ipt')
        var erreur=document.querySelector('.error')

        if(ipts.value==="" || ipts.value<50){
          e.preventDefault()
          ipts.style.border="2px solid red"
          erreur.style.display="flex"
         }else{
          e.preventDefault()
          ipts.style.border="1px solid #b9b9b9ee"
          parentAPI.style.display="flex";
          erreur.style.display="none"
        }
    
    
    })

    var croix=document.querySelector('.croix')
    croix.addEventListener('click',function(){
     parentAPI.style.display="none"
    })




    /***bouton header */
var hamburger = document.querySelector('.hamburger')
var lines = document.querySelector('.lines')
var croixheader = document.querySelector('.croixheader')
var navlink = document.querySelector('.header')

hamburger.addEventListener('click', function () {
    navlink.classList.toggle('open')

    /*if( croix.getBoundingClientRect().width != 20.625){
        croix.style.display="none"
    }*/
    if (navlink.classList.contains('open')) {
        lines.style.display = "none"
        croixheader.innerHTML = "<i class='fa fa-times'></i>"
    } else {
        lines.style.display = "block"
        croixheader.innerHTML = ""
    }

})

