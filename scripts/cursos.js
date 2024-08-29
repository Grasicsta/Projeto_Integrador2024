elementosCursos = [
    {
        imagem: "./img/intro_1.png",
        titulo: "Introdução I",
    },
    {
        imagem: "./img/intro_2.png",
        titulo: "Introdução II",
    },
    {
        imagem: "./img/alfabeto.png",
        titulo: "Alfabeto em Libras",
    }
];

for(let i = 0; i < elementosCursos.length; i++){

    let divCurso = document.createElement("section");

    divCurso.innerHTML = `<div class="curso">
                       <img src="${elementosCursos[i].imagem}" alt="Imagem do curso">
                       <a href="curso_abc_libras.html">${elementosCursos[i].titulo}</a>
                       </div>`;

    const mainCurso = document.getElementById("mainCursos");

    mainCurso.appendChild(divCurso);
}