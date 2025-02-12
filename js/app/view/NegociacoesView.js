class NegociacoesView extends View {
  constructor(elemento) {
    super(elemento);
  }

  _template(model) {
    return `<table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>

      <tbody>
      ${model.listaNegociacoes
        .map(
          (n) => `
          <tr>
            <td>${DateHelper.dataParaTexto(n.data)}</td>
            <td>${n.quantidade}</td>
            <td>${n.valor}</td>
            <td>${n.volume}</td>
          </tr>`
        )
        .join("")}
      </tbody>

      <tfoot>
      <td colspan="3">
      <td>${model.listaNegociacoes.reduce((total, n) => {
        return total + n.volume;
      }, 0.0)}</td>
      </td>
      </tfoot>
    </table>`;
  }
  // o reduce evita de ter que usar gambiarra com forEach, ja que reduce devolve 1 array com 1 resultado
}
