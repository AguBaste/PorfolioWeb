

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function encriptar(){
    let texto = document.getElementById('texto').value;

    if(texto.length != 0){
        // tengo que ver el innerHTML para en base a eso cambiar el encriptado
        let mensCifrado = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/o/gi,"ober")
        .replace(/a/gi,"ai")
        .replace(/u/gi,"ufat");
        document.getElementById('texto').value = mensCifrado;
    }else{
        alert('Debes ingresar texto para encriptar o desencriptar');
    }
}

function desencriptar(){
    let texto = document.getElementById('texto').value;
    if(texto.length != 0){
        let mensCifrado = texto
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ober/gi,"o")
        .replace(/ai/gi,"a")
        .replace(/ufat/gi,"u");
        document.getElementById('texto').value = mensCifrado;
    }else{
        alert('Debes ingresar texto para encriptar o desencriptar');
    }
}
    
    