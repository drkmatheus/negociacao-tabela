class DateHelper {
  textoParaData(texto) {
    // separa cada um dos itens a partir do -
    return new Date(
      ...texto.split("-").map((item, indice) => item - (indice % 2))
    ); // cria um array novo acertando o mes, que inicia em 0 e vai ate 11)
  }

  dataParaTexto(data) {
    return (
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
    );
  }
}
