function trocaCor(){
  
  
}
function alertaAdicionarFoto() {
  alert(
    "Funcionalidade indisponível no momento, nenhum arquivo ficará salvo no perfil. Apenas a foto de perfil."
  );
}

function alertaCarregarFoto() {
  alert(
    "Não há fotos para carregar, pois a funcionalidade está indisponível."
  );
}

function fecharForm() {
  window.location = "profiledono.html";
}

/* SALVAR DADOS MODIFICADOS PELO USUÁRIO NO LOCAL STORAGE E TRANSMITIR PARA A PÁGINA */
if (localStorage.nomePerfil) {
  document.getElementById("mudaNome").innerHTML = localStorage.nomePerfil;
} // Se o localStorage conter nomePerfil irá mostrar o nome modificado do perfil
if (localStorage.tipoPerfil) {
  document.getElementById("mudaTipo").innerHTML = localStorage.tipoPerfil;
} // Se o localStorage conter tipoPerfil irá mostrar o tipo modificado do perfil
if (localStorage.sobrePerfil) {
  document.getElementById("mudaSobre").innerHTML = localStorage.sobrePerfil;
} // Se o localStorage conter sobrePerfil irá mostrar o sobre modificado do perfil
if (localStorage.localPerfil) {
  document.getElementById("mudaLocal").innerHTML = localStorage.localPerfil;
} // Se o localStorage conter localPerfil irá mostrar o local modificado do perfil
if (localStorage.corPerfil) {
  document.getElementById("mudaCor").style.backgroundColor = localStorage.corPerfil;
} // Se o localStorage conter sobrePerfil irá mostrar a cor modificado do perfil


var salvarData = function (event) {
  event.preventDefault();                                                               // Previnir o evento padrão

  var Nome = document.getElementById("NAME").value;                                     // Pegar o valor adquirido na variável NAME
  var Tipo = document.getElementById("tipo").value;                                     // Pegar o valor adquirido na variável tipo
  var Sobre = document.getElementById("sobre").value;                                   // Pegar o valor adquirido na variável sobre
  var Local = document.getElementById("local").value;                                   // Pegar o valor adquirido na variável local
  var Cor = document.getElementById("cor").value;
  

  if(Nome == "" || Tipo == "" || Sobre == "" || Local == "") {
    alert("Você deve preencher todos os campo fora a foto de perfil para continuar.");  // Se nenhum algum campo não for preenchido ele não irá salvar os dados do formulário.
  } else {
    localStorage.setItem("nomePerfil", Nome);                                           // Guardar no localStorage o valor da variavel Nome com a key nomePerfil
    localStorage.setItem("tipoPerfil", Tipo);                                           // Guardar no localStorage o valor da variavel Tipo com a key tipoPerfil
    localStorage.setItem("sobrePerfil", Sobre);                                         // Guardar no localStorage o valor da variavel Sobre com a key sobrePerfil
    localStorage.setItem("localPerfil", Local);                                         // Guardar no localStorage o valor da variavel Local com a key localPerfil
    localStorage.setItem("corPerfil", Cor); 
    

    alert("Dados salvos com sucesso.");                                                 // Mandar um alerta quando os dados forem salvos
    window.location = "profiledono.html";                                               // Levar o usuário para sua página de perfil com as modificações feitas
  }
};


document.getElementById("salvaalt").addEventListener("click", salvarData); // Associar salvamento ao botão
/* END SALVAR DADOS MODIFICADOS PELO USUÁRIO NO LOCAL STORAGE E TRANSMITIR PARA A PÁGINA */

/* RECEBER FOTO DO PERFIL EM BASE 64 */
document.querySelector("#minhafoto").addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem("fotoPerfil", reader.result);
  });

  reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () => {
  const recentImageDataUrl = localStorage.getItem("fotoPerfil");

  if (recentImageDataUrl) {
    document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
  }
});

/* END RECEBER FOTO DO PERFIL EM BASE 64 */