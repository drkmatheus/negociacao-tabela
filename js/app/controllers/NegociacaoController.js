class NegociacaoController {
  // nao percorre o dom muitas vezes e cria uma especie de "cache"
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($("#negociacoesView"));
    this._negociacoesView.update();
  }

  add(event) {
    event.preventDefault();

    this._listaNegociacoes.add(this._criaNegociacao());
    this._limpaFormulario();

    console.log(this._listaNegociacoes);
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }
  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }
}
