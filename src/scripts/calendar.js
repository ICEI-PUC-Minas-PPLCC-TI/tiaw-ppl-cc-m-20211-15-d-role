var db_eventos_iniciais = {
    "data": [
        {
            "dia": "2021-06-31",
            "estabelecimento": "Gilboa",
            "musico": "MC Davi",
            "tipomusica": "Funk",
            "entrada": "+18"
        },
        {
            "dia": "2021-06-31",
            "estabelecimento": "Gilboa",
            "musico": "Matuê",
            "tipomusica": "Trap",
            "entrada": "+18"
        },
        {
            "dia": "2021-06-31",
            "estabelecimento": "Gilboa",
            "musico": "Justin Bieber",
            "tipomusica": "Pop",
            "entrada": "+18"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_eventos'));
if (!db) {
    db = db_eventos_iniciais
};

function insertEvento(evento) {
    let novoEvento = {
        "dia": evento.dia,
        "estabelecimento": evento.estabelecimento,
        "musico": evento.musico,
        "tipomusica": evento.tipomusica,
        "entrada": evento.entrada
    };

    // Insere o novo objeto no array
    db.data.push(novoEvento);
    alert('Evento inserido com sucesso.');

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_eventos', JSON.stringify(db));
}