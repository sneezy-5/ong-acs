

 window.addEventListener('load',function(){
        const loader=document.querySelector('.loader')
        setTimeout(() => {
            loader.classList.add('fondu-out')
            loader.style.display="none"
           window.location.replace("acceuil.html")
        }, 5000);
    })
    
