class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  add(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get listaNegociacoes() {
    return [].concat(this._negociacoes); // devovle uma copia do array original para evitar modificacoes indesejadasg
  }
}
