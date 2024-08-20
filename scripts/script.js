elementosCursos = [
    {
        imagem: "./img/intro_1.jpg",
        titulo: "Introdução I",
    },
    {
        imagem: "./img/intro_2.jpg",
        titulo: "Introdução II",
    },
    {
        imagem: "./img/libras.png",
        titulo: "Alfabeto em Libras",
    }
];

for(let i = 0; i < elementosCursos.length; i++){

    let divCurso = document.createElement("section");

    divCurso.innerHTML = `<div class="curso">
                       <img src="${elementosCursos[i].imagem}" alt="">
                       <a href="#">${elementosCursos[i].titulo}</a>
                       </div>`;

    const mainCurso = document.getElementById("mainCursos");

    mainCurso.appendChild(divCurso);
}