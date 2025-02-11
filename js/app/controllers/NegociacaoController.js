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

    let negociacao = new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao);

    console.log(DateHelper.dataParaTexto(negociacao.data));
  }
}
