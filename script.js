const listaCompleta = [
    {
      titlu: "The Computer and the Brain",
      autor: "John von Neumann",
      numarCititori: 32,
    },
    {
      titlu: "Arhitectura Calcualtoarelor",
      autor: "John von Neumann",
      numarCititori: 24,
    },
    {
      titlu: "A Beutiful Mind",
      autor: "Alan Turring",
      numarCititori: 21,
    },
    {
      titlu: "The Incompletness Theory",
      autor: "Karl Godel",
      numarCititori: 28,
    },
    {
      titlu: "Information Theory",
      autor: "Shannon",
      numarCititori: 12,
    }
  ];
  
  const listaFiltrata = [...listaCompleta];
  const searchButton = document.querySelector("#searchButton");
  const resetButton = document.querySelector("#resetButton");



  const bodyTabelCarti = document.querySelector("#bodyTabelCarti");

  listaFiltrata.forEach((book) => {
  const row = document.createElement('tr');

  const celulaTitlu = document.createElement('td');
  celulaTitlu.innerText = book.titlu;
  row.appendChild(celulaTitlu);

  const celulaAutor = document.createElement('td');
  celulaAutor.innerText = book.autor;
  row.appendChild(celulaAutor);

  const celulaNumarCitiori = document.createElement('td');
  celulaNumarCitiori.innerText = `${book.numarCititori}`;
  row.appendChild(celulaNumarCitiori);

  bodyTabelCarti.appendChild(row);
});
