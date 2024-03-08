var btnMenu = document.getElementById("btnMenu")
var navBar = document.getElementById("navBarMobile")

btnMenu.addEventListener('click', function(){
    if(navBar.style.display == 'none'){
            navBar.style.display = 'block'
    }else {
        navBar.style.display = 'none'
    }
})