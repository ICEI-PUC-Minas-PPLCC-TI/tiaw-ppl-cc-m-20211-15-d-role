window.onload = loadPage;

function alertaAdicionarFoto() {
    alert("Funcionalidade indisponível no momento, nenhum arquivo ficará salvo no perfil.")
}

var db_modificacoes = {};

function addModificacoes(nome, tipo, sobre, local) {
    let modificacoes = {
        "Nome": nome,
        "Tipo": tipo,
        "Sobre": sobre,
        "Local": local
    };
    localStorage.setItem('db_modificacoes', JSON.stringify(modificacoes));
}

function loadPage() {
    let mudarNomeAndTipo = document.getElementById('mudaNomeTipo');
    let mudarSobre = document.getElementById('mudaSobre');
    let mudarLocal = document.getElementById('mudaLocal');

    let changeNameAndTipo = `<h4 class="mt-0 mb-0">${db_modificacoes.nome}</h4>
                                 <p class="small mb-4 tipo">${db_modificacoes.tipo}</p>`
    let changeSobre = `<div class="p-4 rounded shadow-sm bg-light">
                              <p>${db_modificacoes.sobre}</p> 
                            </div>`
    let changeLocal = `<p>${db_modificacoes.local}</p>`

    mudarNomeAndTipo.innerHTML = changeNameAndTipo;
    mudarSobre.innerHTML = changeSobre;
    mudarLocal.innerHTML = changeLocal;
}


function salvaDados(event) {
    event.preventDefault();

    let nome = document.getElementById('NAME').value;
    let tipo = document.getElementById('tipo').value;
    let sobre = document.getElementById('sobre').value;
    let local = document.getElementById('local').value;

    addModificacoes(nome, tipo, sobre, local);

    alert('Dados salvos com sucesso.')
    window.location = "profiledono.html";
}

// Associar salvamento ao botao
document.getElementById('salvaalt').addEventListener('click', salvaDados);
