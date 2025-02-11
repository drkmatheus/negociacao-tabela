class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime()); // cria outro objeto data para evitar alteracoes indesejadas
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this); // congela o objeto com as propriedades criadas
  }

  // o get serve para manter o metodo apenas como leitura, nao permitindo a alteracao dos valores
  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}
