function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}

// Gera 4 números únicos (milhares)
function gerarBilhete(seller) {
  const sheet = SpreadsheetApp.openById("AQUI_O_ID_DA_SUA_PLANILHA")
    .getSheetByName("Bilhetes");

  const numeros = [];

  while (numeros.length < 4) {
    const n = Math.floor(Math.random() * 9000) + 1000;
    if (!numeros.includes(n)) numeros.push(n);
  }

  // Registrar no sheet
  sheet.appendRow([new Date(), seller, ...numeros]);

  return numeros;
}

// Gera 100 bilhetes
function gerarLote(seller) {
  const bilhetes = [];

  for (let i = 0; i < 100; i++) {
    const nums = gerarBilhete(seller);
    bilhetes.push(nums);
  }

  return bilhetes;
}
