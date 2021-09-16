

 window.addEventListener('load',function(){
        const loader=document.querySelector('.loader')
        setTimeout(() => {
            loader.classList.add('fondu-out')
            loader.style.display="none"
            var url = document.querySelector('.url').href

           window.location.replace(url)
        }, 5000);
    })
