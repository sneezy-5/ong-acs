/**designe input inscriptions*/

var inputs= document.querySelectorAll('input');

for (var i=0; i<inputs.length; i++){

    var filed =inputs[i]
    
    filed.addEventListener('input', function(e){

        if(e.target.value != ""){
            e.target.parentNode.classList.add('animation');
        }else if(e.target.value == ""){
            e.target.parentNode.classList.remove('animation')
        }
    })
}

var form=document.querySelector('.form')
form.addEventListener('submit',function(e){

    var inputs= document.querySelectorAll('input');
    inputs.forEach(inp=>{
        if(inp.value===""){
            e.preventDefault()
            inp.style.borderColor="red"
        }else{
            inp.style.borderColor="white"
        }
    })
})