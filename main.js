function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";

    let campoPesquisa = document.getElementById("campo-pesquisa").value;


    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum resultado...</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let modelo = "";
    let fabricante = "";
    let descricao = "";


    for (let listObject of listaCarros) {
        if (listObject.modelo.includes(campoPesquisa) || listObject.fabricante.includes(campoPesquisa) || listObject.descricao.includes(campoPesquisa) || listObject.marcadores.includes(campoPesquisa)){
            resultados += `
                <div class="item-resultado">
                        <h2>
                            <a href="${listObject.link}" target="_blank">${listObject.fabricante} ${listObject.modelo}</a>
                        </h2>
                        <p class="descricao-meta">${listObject.descricao}</p>
                </div>
            `;

        }
    }

    if (!resultados) {
        resultados = "Nenhum resultado..."
    }

    section.innerHTML = resultados;    
}
