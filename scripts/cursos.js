elementosCursos = [
    {
        imagem: "../img/intro_1.png",
        titulo: "Introdução I",
        link: "curso_intro_1.html",
    },
    {
        imagem: "../img/intro_2.png",
        titulo: "Introdução II",
        link: "curso_intro_2.html",
    },
    {
        imagem: "../img/alfabeto.png",
        titulo: "Alfabeto em Libras",
        link: "curso_abc_libras.html",
    }
];

for(let i = 0; i < elementosCursos.length; i++){

    let divCurso = document.createElement("section");

    divCurso.innerHTML = `<div class="curso">
                       <img src="${elementosCursos[i].imagem}" alt="Imagem do curso">
                       <a href="${elementosCursos[i].link}">${elementosCursos[i].titulo}</a>
                       </div>`;

    const mainCurso = document.getElementById("mainCursos");

    mainCurso.appendChild(divCurso);
}