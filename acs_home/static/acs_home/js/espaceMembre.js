/**CANVA */

let $canvas = document.querySelector("canvas");
let $input  = document.querySelector("input");
 
let cx = $canvas.getContext("2d");
 
$input.addEventListener("change", () => {
  // la boucle for va avec l’attribut "multiple"
  // pour un seul fichier, on peut se contenter de "$input.files[0]",
  // mais il faut d’abord tester son existence
  for (let file of $input.files) {
    // comme dans le guide MDN, on s’assure que le fichier est bien une image
    if (/^image\//i.test(file.type)) {
      let blobUrl = URL.createObjectURL(file);

      let $img = document.createElement("img");
 
      $img.onerror = (errorEvent) => {
        URL.revokeObjectURL(blobUrl);
        console.log(errorEvent);
      };
 
      $img.onload = () => {
        URL.revokeObjectURL(blobUrl);
        cx.drawImage($img, 0, 0, 300, 400);
      };
 
      $img.src = blobUrl;
    }
  }
});

/**click sur les parametres */
var param=document.querySelectorAll('.param')
var rightbars=document.querySelector('.rightbars')

for(var i=0;i<param.length;i++){
   param[i].addEventListener('click',function(){
    var parent=this.parentNode
    parent.querySelector('.param.active').classList.remove('active')
    this.classList.add('active')

    if(param[0].classList.contains('active')){
      rightbars.innerHTML=`
      <div class="banniere">
      <h2 class="titrebanniere">voir mes Dons</h2>
  </div>
  <div class="centre">
      <div class="cas">
          <img src="img/ong5.jpg" alt="" height="200" width="200">
          <div class="contenue">
              <div class="titre">
                  Votre don à servir à .....
              </div>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis aliquid quisquam sint, at id corporis eligendi cumque voluptas perferendis nam alias ab eaque. Itaque consequatur exercitationem amet. Culpa, numquam!
              </p>
          </div>
      </div>
      <div class="cas">
       <img src="img/ong6.jpg" alt="" height="200" width="200">
       <div class="contenue">
           <div class="titre">
               Votre don à servir à .....
           </div>
           <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis aliquid quisquam sint, at id corporis eligendi cumque voluptas perferendis nam alias ab eaque. Itaque consequatur exercitationem amet. Culpa, numquam!
           </p>
       </div>
      </div>
      <div class="cas">
       <img src="img/ong7.jpg" alt="" height="200" width="200">
       <div class="contenue">
           <div class="titre">
               Votre don à servir à .....
           </div>
           <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis aliquid quisquam sint, at id corporis eligendi cumque voluptas perferendis nam alias ab eaque. Itaque consequatur exercitationem amet. Culpa, numquam!
           </p>
       </div>
      </div>
      <div class="cas">
       <img src="img/ong8.jpg" alt="" height="200" width="200">
       <div class="contenue">
           <div class="titre">
               Votre don à servir à .....
           </div>
           <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis aliquid quisquam sint, at id corporis eligendi cumque voluptas perferendis nam alias ab eaque. Itaque consequatur exercitationem amet. Culpa, numquam!
           </p>
       </div>
      </div>
</div>
      `
     }

     if(param[1].classList.contains('active')){
       rightbars.innerHTML=`
       
       <div class="bannierefaireundon">
       <h4>Faire Un Don</h4>
    </div>
 
    <form class="centre">

        <div class="cas1">
            <div class="Titre">Mon Don</div>
            <div class="contenu">

                <div class="choix">
                    <div class=" choixbtn active donAnnuel">je fais un don de...</div>
                </div>

                <div class="containercase">

                  <label for="prix" class="somme active1">
                          500€

                      <input type="radio" name="on" id="prix" class="prix" value="500">
                  </label>

                  <label for="prix2" class="somme">

                          1000€

                      <input type="radio" name="on" id="prix2" class="prix" value="1000">
                  </label>

                  <label for="prix3" class="somme">

                        800€
                    <input type="radio" name="on" id="prix3" class="prix" value="800">
                  </label>

                  <label for="prix4" class="somme">
                      

                       50€
                   <input type="radio" name="on" id="prix4" class="prix" value="50">
                  </label>
                </div>


                <div class="saisirsomme">
                   <input type="number" class="ipt">
                   <span>€</span>
                </div>

            </div>
        </div>


        <div class="cas3">
           <div class="Titre">Mon Règlemeent</div>
           <div class="contenu">
               <p>pour le reglement veuillez prendre part à notre moyens de payement ci-dessous</p>

               <div class="block-carte">

                   <div class="cartes">
                       <label for="click1" class="label">
                           <img src="img/MasterCard_early_1990s_logo.svg.png" alt="MasterCard_early_1990s_logo" height="100" width="100">
                       </label>

                       <label for="click2" class="label">
                           <img src="img/visa_PNG30.png" alt="MasterCard_early_1990s_logo" height="100" width="100">
                       </label>

                       <label for="click3" class="label">
                           <img src="img/mobile-money.png" alt="MasterCard_early_1990s_logo" height="100" width="100">
                       </label>
                   </div>

                   <div class="boutons">
                       <input type="radio" name="ok" id="click1" class="checkbtn btncarte1">
                       <input type="radio" name="ok" id="click2" class="checkbtn btncarte2">
                       <input type="radio" name="ok" id="click3" class="chekbtn3 btncarte3">
                   </div>

               </div>

               <div class="question">
                   <input type="text" placeholder="saisissez votre numéro de carte bancaire" class="textCarte">
                   <div class="inp-rens">

                       <select class="mois">
                       <option>Mois</option>
                       <option>Janvier</option>
                       <option>Février</option>
                       </select>

                       <select class="annee">
                       <option>Année</option>
                       <option>2021</option>
                       <option>2020</option>
                       </select>

                       <input type="text" placeholder="CVV" class="cvv">
                   </div>
               </div>

               <input type="submit" value="VALIDER" id="label">
           </div>

           <p style="color: red;display:none;" class="alertcoche1">*veuillez cochez une carte bancaire</p>
        </div>
    </form>
       `

       /*faire un don le choix des prix*/
var somme=document.querySelectorAll('.somme')
for(var i=0;i<somme.length;i++){

 somme[i].addEventListener('click',function(){

 var parent=this.parentNode
 parent.querySelector('.somme.active1').classList.remove('active1')
this.classList.add('active1')

    })
  }

  /*faire un don le choix des prix*/
  /**cochage btn  */
var checkbtn=document.querySelectorAll('.checkbtn')
var cvv = document.querySelector('.cvv')
var textCarte=document.querySelector('.textCarte')
var mois=document.querySelector('.mois')
var annee=document.querySelector('.annee')
var alertcoche1=document.querySelector('.alertcoche1')

checkbtn.forEach(btn => {
  btn.addEventListener('click',function () {
    var parent=btn.parentNode.parentNode.parentNode.parentNode
    
    parent.style.height="auto"
    parent.querySelector('.contenu').style.height="89%"
    parent.querySelector('.Titre').style.height="11%"
    parent.querySelector('.question').style.display="flex"
    cvv.classList.add('ipt')
    textCarte.classList.add('ipt')
    mois.classList.add('select')
    annee.classList.add('select')
    alertcoche1.style.display="none"
    
  })
});

var chekbtn3=document.querySelector('.chekbtn3')
chekbtn3.addEventListener('click',function () {
  var parent=chekbtn3.parentNode.parentNode.parentNode.parentNode
    
  parent.style.height="300px"
  parent.querySelector('.contenu').style.height="auto"
  parent.querySelector('.Titre').style.height="17%"
  parent.querySelector('.question').style.display="none"
  cvv.classList.remove('ipt')
  textCarte.classList.remove('ipt')
  mois.classList.remove('select')
  annee.classList.remove('select')
  alertcoche1.style.display="none"
})




var centre=document.querySelector('.centre')
centre.addEventListener('submit',function(e){
    var alertcoche1=document.querySelector('.alertcoche1')
    /*blocage des radios*/

    var btncarte1=document.querySelector('.btncarte1')
    var btncarte2=document.querySelector('.btncarte2')
    var btncarte3=document.querySelector('.btncarte3')
 
    if(btncarte1.checked===false && btncarte2.checked===false && btncarte3.checked===false){
        e.preventDefault()
        alertcoche1.style.display="flex"
    }else if(btncarte1.checked===true || btncarte2.checked===true || btncarte3.checked===true){
        alertcoche1.style.display="none"
    }

   /*blocage des inputs*/
    var ipts=document.querySelectorAll('.ipt')
    ipts.forEach(ipt => {
        if(ipt.value===""){
            e.preventDefault()
            ipt.style.border="2px solid red"
        }else{
            ipt.style.border="1px solid #b9b9b9ee"
        }
    });

    /*blocage des selects*/
    var selects=document.querySelectorAll('.select')

    selects.forEach(select=>{
        if(select.value===select[0].innerHTML){
            e.preventDefault()
            select.style.border="2px solid red"
        }else if(select.value !==select[0].innerHTML){
            select.style.border="1px solid #b9b9b9ee"
        }
    })


})

/*fin de traitement de formulaire */




     }

     if(param[2].classList.contains('active')){
       rightbars.innerHTML=`
       

       <h2>JE DEVIENS ADHÉRENT</h2>

       <p>
        Les adhérents d'ONG-ACS sont des particuliers qui partagent les valeurs de l'association, sa vision et sa mission. Les adhérents forment la légitimité de ONG-ACS.
       </p>

       <h2>Qui peut adhérer à ONG-ACS ?</h2>
       
       <p>
        Tout individu majeur à jour de sa cotisation peut être adhérent de ONG-ACS.
       </p>

       <h2>Pourquoi adhérer ?</h2>
       
        <ul>
          <li>Si vous souhaitez contribuer à la lutte contre la pauvreté dans le monde, vous pouvez vous engagez en tant qu'adhérent.</li>

          <li>En tant qu'adhérent de ONG-ACS, vous êtes la voix de l'association dans votre environnement - familial, amical ou professionnel. Vous devenez acteur de la lutte contre la pauvreté dans le monde.</li>

          <li>En adhérant, vous pouvez contribuer de plusieurs façons selon vos moyens, votre expertise, vos intérêts personnels, vos réseaux. Il est également possible de participer aux réflexions, aux événements, aux ateliers et aux activités.</li>

          <li>Les adhérents font partie de l'assemblée générale de l'association. Ils y participent une fois par an afin de voter les rapports d'activités et financiers, ainsi que le budget pour le nouvel exercice. Lors de cette assemblée générale, les adhérents sont également invités à élire en leur sein les nouveaux membres du conseil d'administration de l'association, renouvelé en partie chaque année.</li>
        </ul>


       <h2>Comment adhérer ?</h2>

       <p>Pour adhérer à ONG-ACS veuillez remplir le formulaire ci-dessous</p>

       <form class="containerIscrit">
           <div class="casInscrit">
             <div class="Titre">
              Mon adhésion
             </div>
             <div class="contenue">
                 <div class="contenueTxT1">
                     adhérer à ONG-ACS  
                 </div>

                 <div class="contenueTxT2">
                  40 €
              </div>
             </div>
           </div>


           <div class="casInscrit">
            <div class="Titre">
              Mes Coordonnées
             </div>
             <div class="contenue">
                
              <div>
                <span><i class="fa fa-envelope"></i></span><input type="email" placeholder="Email" class="ipt">
              </div>

            <div class="deuxinput">
                <select name="Civilité" class="select">
                    <option>Civilité</option>
                    <option>Hommme</option>
                    <option>Femme</option>
                </select>
                <input type="text" placeholder="Nom" class="ipt">
            </div>

              <div class="deuxinput2">
                <input type="text" placeholder="Prenom" class="ipt">
                <input type="text" placeholder="Adresse" class="ipt">
              </div>

              <div class="deuxinput3">
                <input type="text" placeholder="Code postal" class="ipt">
                <input type="text" placeholder="ville" class="ipt">
            </div>

             <select name="" id="" class="pays select">
               <option>PAYS</option>
               <option>France</option>
               <option>Côte d'ivoire</option>
               <option>Belgique</option>
             </select>

             <input type="number" placeholder="Téléphone" class="ipt">

             <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
             </p>
                  
             </div>               
           </div>


           <div class="casInscrit">

            <div class="Titre3">Mon Règlemeent</div>
            <div class="contenu">
                <p>pour le reglement veuillez prendre part à notre moyens de payement ci-dessous</p>

                <div class="block-carte">

                    <div class="cartes">
                        <label for="click1" class="label">
                            <img src="img/MasterCard_early_1990s_logo.svg.png" alt="MasterCard_early_1990s_logo" height="100" width="100">
                        </label>

                        <label for="click2" class="label">
                            <img src="img/visa_PNG30.png" alt="MasterCard_early_1990s_logo" height="100" width="100">
                        </label>

                        <label for="click3" class="label">
                            <img src="img/mobile-money.png" alt="MasterCard_early_1990s_logo" height="100" width="100">
                        </label>
                    </div>

                    <div class="boutons">
                        <input type="radio" name="ok" id="click1" class="checkbtn btncarte1">
                        <input type="radio" name="ok" id="click2" class="checkbtn btncarte2">
                        <input type="radio" name="ok" id="click3" class="chekbtn3 btncarte3">
                    </div>

                </div>

                <div class="question">
                    <input type="text" placeholder="saisissez votre numéro de carte bancaire" class="textCarte">
                    <div class="inp-rens">

                        <select class="mois">
                       <option>Mois</option>
                       <option>Janvier</option>
                       <option>Février</option>
                        </select>

                        <select class="annee">
                            <option>Année</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                        </select>

                        <input type="text" placeholder="CVV" class="cvv">
                    </div>
                </div>

                <input type="submit" value="VALIDER" id="label">
            </div>

            <p style="color: red;display:none;" class="alertcoche1">*veuillez cochez une carte bancaire</p>


           </div>
      </form>
       `
     

       /*formulaire*/

/*btn formulaire carte banquaire*/
/**cochage btn  */
/*var checkbtn=document.querySelectorAll('.checkbtn')


checkbtn.forEach(btn => {
  btn.addEventListener('click',function () {
    var parent=btn.parentNode.parentNode.parentNode.parentNode
    
    parent.querySelector('.question').style.display="flex"
    
  })
});

var chekbtn3=document.querySelector('.chekbtn3')
chekbtn3.addEventListener('click',function () {
  var parent=chekbtn3.parentNode.parentNode.parentNode.parentNode
    
  parent.querySelector('.question').style.display="none"
})*/


/*aside*


/*btn formulaire carte banquaire*/
/**cochage btn  */
var checkbtn=document.querySelectorAll('.checkbtn')
var cvv = document.querySelector('.cvv')
var textCarte=document.querySelector('.textCarte')
var mois=document.querySelector('.mois')
var annee=document.querySelector('.annee')
var alertcoche1=document.querySelector('.alertcoche1')

checkbtn.forEach(btn => {
  btn.addEventListener('click',function () {
    var parent=btn.parentNode.parentNode.parentNode.parentNode
    
    parent.querySelector('.question').style.display="flex"
    cvv.classList.add('ipt')
    textCarte.classList.add('ipt')
    mois.classList.add('select')
    annee.classList.add('select')
    alertcoche1.style.display="none"
  })
});

var chekbtn3=document.querySelector('.chekbtn3')
chekbtn3.addEventListener('click',function () {
  var parent=chekbtn3.parentNode.parentNode.parentNode.parentNode
    
  parent.querySelector('.question').style.display="none"
  cvv.classList.remove('ipt')
  textCarte.classList.remove('ipt')
  mois.classList.remove('select')
  annee.classList.remove('select')
  alertcoche1.style.display="none"
})



/**formulaire aside*/

/*fin aside*/



/* traitement de formulaire*/

var form=document.querySelector('.containerIscrit')
form.addEventListener('submit',function(e){
    var alertcoche1=document.querySelector('.alertcoche1')
    /*blocage des radios*/

    var btncarte1=document.querySelector('.btncarte1')
    var btncarte2=document.querySelector('.btncarte2')
    var btncarte3=document.querySelector('.btncarte3')
 
    if(btncarte1.checked===false && btncarte2.checked===false && btncarte3.checked===false){
        e.preventDefault()
        alertcoche1.style.display="flex"
    }else if(btncarte1.checked===true || btncarte2.checked===true || btncarte3.checked===true){
        alertcoche1.style.display="none"
    }

   /*blocage des inputs*/
    var ipts=document.querySelectorAll('.ipt')
    ipts.forEach(ipt => {
        if(ipt.value===""){
            e.preventDefault()
            ipt.style.border="2px solid red"
        }else{
            ipt.style.border="1px solid #b9b9b9ee"
        }
    });

    /*blocage des selects*/
    var selects=document.querySelectorAll('.select')

    selects.forEach(select=>{
        if(select.value===select[0].innerHTML){
            e.preventDefault()
            select.style.border="2px solid red"
        }else if(select.value !==select[0].innerHTML){
            select.style.border="1px solid #b9b9b9ee"
        }
    })


})

/*fin de traitement de formulaire */


     }

   })

}




