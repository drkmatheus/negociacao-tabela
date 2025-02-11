class NegociacaoController {
  // nao percorre o dom muitas vezes e cria uma especie de "cache"
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }

  add(event) {
    event.preventDefault();

    // converte a data de string para objeto para nao dar problema com o getTime()
    let data = new Date(
      ...this._inputData.value // espalha cada um dos itens do objeto em um array
        .split("-") // separa cada um dos itens a partir do -
        .map((item, indice) => item - (indice % 2)) // cria um array novo acertando o mes, que inicia em 0 e vai ate 11
    );

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao);
  }
}
