class DateHelper {
  constructor() {
    throw new Error("DateHelper nao pode ser instanciado.");
  }
  // static para os metodos serem acessados sem precisar instanciar um date helper
  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
      throw new Error("Data deve estar no formato aaaa-mm-dd");
    }
    // separa cada um dos itens a partir do -
    return new Date(
      ...texto.split("-").map((item, indice) => item - (indice % 2))
    ); // cria um array novo acertando o mes, que inicia em 0 e vai ate 11)
  }

  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth + 1}/${data.getFullYear}`;
  }
}
