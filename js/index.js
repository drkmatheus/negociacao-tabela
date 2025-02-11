// captura os campos do html a partir do id.
let campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor"),
];

console.log(campos);

// captura o tbody da tabela pra adicionar as novas linhas no futuro
let tbody = document.querySelector("table tbody");

// pega a classe form adiciona uma escuta nele para o botao no evento submit
document.querySelector(".form").addEventListener("submit", (event) => {
  // evita que a pagina recarregue
  event.preventDefault();

  // cria uma tr nova
  let tr = document.createElement("tr");

  // itera por cada campo do array campos, cria um td, aplica o conteudo do campo ao td e adiciona td a tr
  campos.forEach((campo) => {
    let td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  // cria um td para o campo volume que nao pertence ao array de campos
  let tdVolume = document.createElement("td");
  // multiplica os valores nos campos 1 e 2 e atribui ao conteudo de texto de tdVolume
  tdVolume.textContent = campos[1].value * campos[2].value;
  // adiciona o conteudo de tdVolume ao tr e depois tr é adicionada ao tbody
  tr.appendChild(tdVolume);
  tbody.appendChild(tr);

  // zera os campos e foca no campo de data apos a adicao de uma linha nova
  campos[0].value = "";
  campos[1].value = 1;
  campos[2].value = 0;

  campos[0].focus();
});
