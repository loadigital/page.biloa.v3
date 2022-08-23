

//page portada
const fragment = document.createDocumentFragment();
document.addEventListener('DOMContentLoaded', () => {
    fetchCartelera();  
});
const fetchCartelera = async () => {
    try{
        const res = await fetch('js/api.json');
        const data = await res.json();
        cartelera(data);
    }catch (error) {
        console.log(error);
    }
}

const cartelera = data =>{
    const movieCartelera = Math.floor(Math.random() * data.length);
    const element = data[movieCartelera];
    const cartelera = document.querySelector("#cartelera");
    const divCartelera = document.createElement("div");
    
    divCartelera.innerHTML = `
    <div
    style="
    background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0) 100%), url(${element.urlImg});
    min-height: 30.62em;
    background-repeat: no-repeat;
    background-position:  center;
	background-size: 100%;
	margin-bottom: 1.12em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    
     ">
     <div class="co-data-cartelera">
     <div class="co-categoria"><h6>${element.categoria}</h6></div>
     <div class="co-title"><p>${element.title}</p></div>
     <div class="co-button-cartelera"><a href="${element.linkVideo}"><i class="bi-play-circle"></i> VER AHORA</a></div>
     </div>
     
    </div>
    
    `
    const clone = divCartelera.cloneNode(true);
    fragment.appendChild(clone);    
    cartelera.appendChild(fragment);
};


const co_movies = document.getElementById("co-movies");
const tem_movies = document.getElementById("tem-movies").content;
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});
const fetchData = async () => {
    try{
        const res = await fetch('js/api.json');
        const data = await res.json();
        movies(data);
    }catch (error) {
        console.log(error);
    };
};

const movies = data => {
    data.forEach(movie => {
        tem_movies.querySelector('img').src = movie.urlImg;
        tem_movies.querySelector('h5').textContent = movie.title;
        tem_movies.querySelector('a').href = movie.linkVideo;
        const clone = tem_movies.cloneNode(true); 
        fragment.appendChild(clone);
        co_movies.appendChild(fragment); 
    }); 
};

const ani = window.addEventListener("scroll", function(){
    const cabecera = document.querySelector("header");
    cabecera.classList.toggle("ani--header",window.scrollY>0);
    
});

const menuCategorias = document.getElementById("menu-categorias");
menuCategorias.addEventListener("click", ()=>{
    document.getElementById("categorias").style.bottom="0";
});

const categoria = document.getElementById("xcategory");
categoria.addEventListener("click", ()=>{
    document.getElementById("categorias").style.bottom="-100%";
})


const positionCero = document.getElementById("bi-search");
positionCero.addEventListener("click", function (){
    document.getElementById("contenedor-inp").style.right="0";
})

const positionAtras = document.getElementById("atras-inp");
positionAtras.addEventListener("click", function (){
    document.getElementById("contenedor-inp").style.right="-100%";
})

const borraInp = document.getElementById("borrar-inp");
borraInp.addEventListener("click", function (){
    document.getElementById("inp").value = "";
})

const moviesIndexx = document.getElementById("movies-index-buscador");
const tem_buscador = document.getElementById("tem-buscador").content;
document.addEventListener('DOMContentLoaded', () => {
    fetchBusc();
});
const fetchBusc = async () => {
    try{
        const res = await fetch('js/api.json');
        const data = await res.json();
        movieIndexx(data);
    }catch (error) {
        console.log(error);
    };
};
const movieIndexx = data => {
    data.forEach(movie => {
        tem_buscador.querySelector('img').src = movie.urlImg;
        tem_buscador.querySelector('h5').textContent = movie.title;
        tem_buscador.querySelector('a').href = movie.linkVideo;
        const clone = tem_buscador.cloneNode(true); 
        fragment.appendChild(clone); 
        
        moviesIndexx.appendChild(fragment); 
    }); 
};


$(document).ready(function(){
    
    //$('.movies-t').css('display','flex');
    $("#inp").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    
    $(".movies-index-buscador .movies-buscador").filter(function() {
        
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
            
        });
    });

const share = document.getElementById("share");
    share.addEventListener("click", ()=>{
    document.getElementById("modal-so").style.top="0";
        });
const xcircle = document.getElementById("xcircle");
 xcircle.addEventListener("click", ()=>{
    document.getElementById("modal-so").style.top="-100%";
});


    