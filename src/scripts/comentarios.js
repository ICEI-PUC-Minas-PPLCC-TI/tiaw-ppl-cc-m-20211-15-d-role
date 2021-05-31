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
};
