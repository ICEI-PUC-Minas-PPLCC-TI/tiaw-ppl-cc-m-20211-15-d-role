onload = () => {
  btn_submit.disabled = true;
  let validaComentario = () => {
    if (inputComentario.value.length != 0) {
      btn_submit.disabled = false;
    } else {
      btn_submit.disabled = true;
    }
  };
  inputComentario.oninput = validaComentario;

  var countId = 0;

  if (localStorage.getItem("countId") != null) {
     countId = localStorage.getItem("countId");
  }
  for (let index = 0; index < countId; index++) {
     console.log(index);
     imprimeComentario(index);
  }

  function imprimeComentario(ultimoComentario) {

     var dicionario = JSON.parse(localStorage.getItem("comentario" + ultimoComentario));
     $("#addComment").append(`
        <div class="p-4 rounded">
        <p>${dicionario.usuario}</p>
        <p>${dicionario.comentario}</p>
     </div>`);
  };
};

var salvaComentario = function (comentario) {
  comentario.preventDefault();

  var countId = 0;

  if (localStorage.getItem("countId") != null) {
    countId = localStorage.getItem("countId");
  } else {
    countId = 0;
  }

  var Comentario = document.getElementById("inputComentario").value;
  var Usuario = sessionStorage.getItem("usuarioCorrente");
  Usuario = JSON.parse(Usuario);

  var dicionario = {
    "comentario": Comentario,
    "usuario": Usuario.nome,
  };

  var JSONdicionario = JSON.stringify(dicionario);
  localStorage.setItem("comentario" + countId, JSONdicionario);
  imprimeComentario(countId);

  countId++;

  localStorage.setItem("countId", countId);

  alert("Comentário enviado com sucesso!");

};

document
  .getElementById("btn_submit")
  .addEventListener("click", salvaComentario); // Associar salvamento ao botão
