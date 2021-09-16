


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
    {% for don in don %}
     <div class="cas">
        <img src="{{ don.image.url }}" alt="" height="200" width="200">
        <div class="contenue">
            <div class="titre">
                Votre don à servir a .....
            </div>
            <p>
                {{ don.describe }}
            </p>
        </div>
    </div>
    {% endfor %}
        
  </div>
      `
     }

     if(param[1].classList.contains('active')){
       rightbars.innerHTML=`
       

       <!--FAIRE UN DON-->


       <div class="bannierefaireundon banniere">
           <h4 class="titrebanniere">Faire Un Don</h4>
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
                    </div>
       
       
                    <div class="saisirsomme">
                       <input type="number" class="number ipt" value="8">
                       <span>€</span>

                       <p style="color: red; display: none;" class="error">Le don doit être superieur ou égale à 50€</p>
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
                               <img src="{% static '/account/img/MasterCard_early_1990s_logo.svg.png' %}" alt="MasterCard_early_1990s_logo" height="100" width="100">
                           </label>
       
                           <label for="click2" class="label">
                               <img src="{% static '/account/img/visa_PNG30.png' %}" alt="MasterCard_early_1990s_logo" height="100" width="100">
                           </label>
       
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

/*fin de traitement de formulaire */




     }

     if(param[2].classList.contains('active')){
       rightbars.innerHTML=`
       


       <!---adherer ong-->

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


/*aside*/



/**formulaire aside*/

/*fin aside*/



/* traitement de formulaire*/

        /* traitement de formulaire api d'adheration*/
        var parentAPI = document.querySelector('.parentAPI')
        var formadherant = document.querySelector('.containerIscrit')
        formadherant.addEventListener('submit', function (e) {
         e.preventDefault()
         var parentAPI = document.querySelector('.parentAPI')
         var ipts=document.querySelectorAll('.ipt')
         var selects = document.querySelectorAll('.select')
     
        /*blocage des inputs**/
     
        ipts.forEach(ipt => {
            if(ipt.value===""){
                e.preventDefault()
                ipt.style.border="2px solid red"
            }else{
                ipt.style.border="0.1px solid #9e9e9e"
                parentAPI.style.display="flex"
            }
        });
     
        /*blocage des selects*/
     
     
        selects.forEach(select=>{
            if(select.value===select[0].innerHTML){
                e.preventDefault()
                select.style.border="2px solid red"
            }else if(select.value !==select[0].innerHTML){
                select.style.border="0.1px solid #9e9e9e"
                parentAPI.styyle.display="flex"
            }
        })
     
     })

/*fin de traitement de formulaire */


     }

    

     if(param[3].classList.contains('active')){
         rightbars.innerHTML=`
         <div class="codeajoutphoto">
 
         <div class="formparam">
            <h3>AJOUTER UNE PHOTO</h3>
             <div class="ajoutPhoto">
                
                 <p><a href="{% url 'account:edit' request.user.id  %}">Ajouter une photo</a><p>
             </div>
                    
         </div>
     
         <div class="ModifMP">
             <h3>Modifier Mon Mot De Pass</h3>
     
            <div class="boutonMp">
                 <a href="{% url 'account:password_change' %}" >Changer Mot de passe</a>
            </div>
         </div>
     
       </div>
        
         `

         /**CANVA ajoute de photo**/
var iconecamera =document.querySelector('.iconecamera')
let $canvas = document.querySelector("canvas");
let $input  = document.querySelector("input");
 
let cx = $canvas.getContext("2d");
 
$input.addEventListener("change", () => {
  iconecamera.style.display="none"
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
        cx.drawImage($img, 90, 0, 600, 500);
      };
 
      $img.src = blobUrl;
    }
  }
});


     }


     if(param[4].classList.contains('active')){
         var aside=document.querySelector('.aside')
         var btnOui=document.querySelector('.btnOui')
         var btnNon=document.querySelector('.btnNon')
         var link = document.querySelector('.link')


         aside.style.display="flex"
         
         btnOui.addEventListener('click',function(){
             window.location.replace(link)
             
         })

         btnNon.addEventListener('click',function(){
             aside.style.display="none"
         })

     }

   })

}



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



