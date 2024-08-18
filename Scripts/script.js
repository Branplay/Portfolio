ScrollReveal().reveal('.contenido', {
    delay: 100,
    duration: 400,
    reset: false,
    interval: 100
});

function copiarUrl(){
    let url=document.getElementById('url');
    let button=document.getElementById('botonCopiar');

    navigator.clipboard.writeText(url.textContent);
    button.textContent='Copiado';
}
function copiarUrl2(){
    let url=document.getElementById('url2');
    let button=document.getElementById('botonCopiar2');

    navigator.clipboard.writeText(url.textContent);
    button.textContent='Copiado';
}

function Myfuncion() {
    document.getElementsByClassName("navresp")[0].classList.toggle("navrespvi");
}
function hiddenf(){
    document.getElementsByClassName("navresp")[0].classList.toggle("navrespvi");
}