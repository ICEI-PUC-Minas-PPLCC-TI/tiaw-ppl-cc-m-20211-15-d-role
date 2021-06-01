onload = () => {
  // Início seção validar comentário (para bloquer botão enviar caso não tenha nada digitado no input dos comentários)
  btn_submit.disabled = true;
  let validaComentario = () => {
    if (inputComentario.value.length != 0) {
      btn_submit.disabled = false;
    } else {
      btn_submit.disabled = true;
    }
  };
  inputComentario.oninput = validaComentario;
  // Fim seção validar comentário

  // Início seção para carregar os comentários já existentes no carregamento da página
  var countId = 0;

  if (localStorage.getItem("countId") != null) {
    // se o contador de comentários já existir no localStorage, o contId assume esse valor para participar do for
    countId = localStorage.getItem("countId");
  }
  for (let index = 0; index < countId; index++) {
    imprimeComentario(index);
  }
};
function imprimeComentario(ultimoComentario) {
  var dicionario = JSON.parse(
    localStorage.getItem("comentario" + ultimoComentario)
  );
  $("#addComment").append(`
        <div class="p-4 rounded shadow-sm bg-light">
        <p><strong>${dicionario.usuario}:</strong></p>
        <p>${dicionario.comentario}</p>
     </div>`); // imprime no html o último comentário no localStorage (comentario + index -> ex.: comentario4)
}

var salvaComentario = function (comentario) {
  comentario.preventDefault();

  var countId = 0;

  if (localStorage.getItem("countId") != null) {
    // se o contador de comentários já existir no localStorage, o contId assume esse valor
    countId = localStorage.getItem("countId");
  } else {
    countId = 0; // se não, é a posição inicial
  }

  var Comentario = document.getElementById("inputComentario").value;
  var Usuario = sessionStorage.getItem("usuarioCorrente");
  Usuario = JSON.parse(Usuario); // pega os dados do usuário

  var dicionario = {
    comentario: Comentario,
    usuario: Usuario.nome, // pega apenas a propriedade nome do objeto usuário
  };

  var JSONdicionario = JSON.stringify(dicionario); // transforma em JSON para armazenar no localStorage como comentário + id (inicialmente comentario0)
  localStorage.setItem("comentario" + countId, JSONdicionario);
  imprimeComentario(countId); // chama a função para adicionar o comentário imediatamente quando enviado

  countId++; // adiciona o contador

  localStorage.setItem("countId", countId); // guarda esse contador para fixar a quantidade de comentários já existentes

  alert("Comentário enviado com sucesso!");
};

document
  .getElementById("btn_submit")
  .addEventListener("click", salvaComentario); // Associar salvamento ao botão
