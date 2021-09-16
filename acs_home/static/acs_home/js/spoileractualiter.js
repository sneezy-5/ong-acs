/**js acceuil */

(function () {
    var scrolly = function () {
        var SupporPageOFFSet = window.pageXOFFset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        return SupporPageOFFSet ? window.pageXOffset :
            isCSS1Compat ? document.documentElement.scrollTop :
                document.body.scrollTop;
    }

    var element = document.querySelector('.pluginfb')

    var rect = element.getBoundingClientRect()
    var top = rect.top + scrolly()
    var offset = parseInt(element.getAttribute('data-offset') || 0, 10)
    if (element.getAttribute('data-constraint')) {
        var constraint = document.querySelector(element.getAttribute('data-constraint'))
    } else {
        var constraint = document.body
    }

    var constraintrect = constraint.getBoundingClientRect()
    var constraintbottom = constraintrect.top + scrolly() + constraintrect.height - offset - rect.height


    var onscroll = function () {
        if (scrolly() > constraintbottom && element.style.position != "absolute") {
            element.style.position = "absolute"
            element.style.bottom = "0"
            element.style.top = "auto"
        }

        else if (scrolly() > top - offset && scrolly() < constraintbottom && element.style.position != "fixed") {

            element.style.position = "fixed"
            element.style.top = offset + "px"
            element.style.bottom = "auto"
            element.style.width = rect.width + "px"

        } else if (scrolly() < top - offset && element.style.position != "static") {
            element.style.position = "static"

        }
    }


    window.addEventListener('scroll', onscroll)

})()




var liensbtn = document.querySelectorAll('.liensbtn')
var btn = document.querySelectorAll('.btn')



liensbtn.forEach(liens => {
    liens.addEventListener('mouseover', function () {
        liens.querySelector('.btn').style.display = "flex"
    })

    liens.addEventListener('mouseout', function () {
        liens.querySelector('.btn').style.display = "none"
    })
})


/*aside*/


/**formulaire aside*/

/**croix adhesion */
var block = document.querySelector('.block')


var croix = document.querySelector('.croix-adesion')
croix.addEventListener('click', function () {
    block.style.display = "none"
})


var btndevis = document.querySelector('.btn-devis')
btndevis.addEventListener('click', function () {
    block.style.display = "flex"
})

var parentAPI=document.querySelector('.parentAPI')
var croixapi = document.querySelector('.croix-api')
croixapi.addEventListener('click', function () {
    parentAPI.style.display = "none"
})
/*fin aside*/



/* traitement de formulaire*/

var form = document.querySelector('.containerIscrit')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    var parentAPI = document.querySelector('.parentAPI')
    var ipts=document.querySelectorAll('.iptz')
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

/*fin de traitement de formulaire */
var jours = document.querySelector('.joursactu')
var mois = document.querySelector('.moisactu')
var annee=document.querySelector('.anneeactu')

var imgcontainer=document.querySelector('.imgcontainer')
var titre=document.querySelector('.titreactu')
var text=document.querySelector('.textactu')


/**importer l'img,titre et text d'actuaité */
window.onstorage=event=>{
    console.log(event)
}

/*jours.innerHTML=localStorage.getItem('valeurjours')
console.log(mois.innerHTML=localStorage.getItem('valeurmois'))
annee.innerHTML=localStorage.getItem('valeurannee')

imgcontainer.src=localStorage.getItem('imgactu')
titre.innerHTML=localStorage.getItem('valeurtitre')
text.innerHTML=localStorage.getItem('valeurtext')*/
