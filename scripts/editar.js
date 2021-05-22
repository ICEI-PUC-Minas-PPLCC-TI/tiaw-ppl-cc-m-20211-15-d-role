window.onload = function() {
    var btnSalvar = document.getElementById("salvaalt");

    btnSalvar.onclick = salvarDados;
}

function salvarDados() {
    var inputNome = document.getElementById("NAME");
    var inputSobre = document.getElementById("sobre");
    var inputTipo = document.getElementById("tipo")
    var inputLocalizacao = document.getElementById("local");

    var Name = inputNome.value;
    var About = inputSobre.value;
    var Local = inputLocalizacao.value;
    var Tipo = inputTipo.value;

    localStorage.setItem("NOMESALVO", Name);
    localStorage.setItem("SOBRESALVO", About);
    localStorage.setItem("LOCALSALVO", Local);
    localStorage.setItem("TIPOSALVO", Tipo);

    /*
    document.getElementById("mudaNome").innerText = ;
    document.getElementById("mudaSobre").innerText = ;
    document.getElementById("mudaLocal").innerText = ;
    if('tipo' == 1) {
        document.getElementById("mudaTipo").innerText = "Estabelecimento";
    } else {
        document.getElementById("mudaTipo").innerText = "Músico";
    }
     */

}

function alertaAdicionarFoto() {
    alert("Funcionalidade indisponível no momento.")
}
