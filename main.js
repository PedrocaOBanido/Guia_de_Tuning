function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";

    for (let listObject of listaCarros) {
        resultados += `
            <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${listObject.fabricante} ${listObject.modelo}</a>
                    </h2>
                    <p class="descricao-meta">${listObject.descricao}</p>
            </div>
        `;
    }


    section.innerHTML = resultados;    
}


