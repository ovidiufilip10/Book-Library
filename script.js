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
      titlu: "The Witcher",
      autor: "Andrzej Sapkowski",
      numarCititori: 54,
    },
    {
        titlu: "Information Theory",
        autor: "Shannon",
        numarCititori: 12,
    }
  ];
  const removeCurentDisplay = (element) =>{
    while (element.hasChildNodes()) {
      element.removeChild(element.firstChild);
    }
}

  function displayFilteredList(listaFiltrata){
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
  }
  
  const listaFiltrata = [...listaCompleta];
  const bodyTabelCarti = document.querySelector("#bodyTabelCarti");
  displayFilteredList(listaFiltrata);
  const searchButton = document.querySelector("#searchButton");
  const resetButton = document.querySelector("#resetButton");
  const searchText = document.querySelector("#searchText");
  const errorText = document.querySelector(".errorText");
  const resultText = document.querySelector(".resultText")

    resetButton.addEventListener("click", function(){
        searchText.value = "";
        resetButton.style.display = "none";
        resultText.style.display = "none";
        removeCurentDisplay(bodyTabelCarti);
        console.log(listaFiltrata);
        displayFilteredList(listaFiltrata);
    }
    );
    searchButton.addEventListener("click", function(){
        if(searchText.value.length < 3 ){
            errorText.style.display = "flex";
            return ;
        }
        removeCurentDisplay(bodyTabelCarti);
        errorText.style.display = "none";
        resetButton.style.display = "flex";
        const newList = listaFiltrata.filter( book => { return book.titlu.toLowerCase().includes(searchText.value.toLowerCase())===true || book.autor.toLowerCase().includes(searchText.value.toLowerCase())===true 
        })
        displayFilteredList(newList);
        resultText.innerHTML=`${newList.length} Rezultate`;
        resultText.style.display = "flex";
    }
    );
